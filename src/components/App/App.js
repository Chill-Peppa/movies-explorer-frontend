import React from 'react';
import './App.css';

import {
  Routes,
  Route,
  useLocation,
  Navigate,
  useNavigate,
} from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Auth from '../../utils/api/auth';
import MainApi from '../../utils/api/MainApi';
import MoviesApi from '../../utils/api/MoviesApi';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import Preloader from '../Preloader/Preloader';

function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = React.useState({ name: '', about: '' });
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [movies, setMovies] = React.useState([]);
  //стейт ошибок с сервера
  const [serverError, setServerError] = React.useState({});
  //стейт для проверки корректности запроса в профиле юзера
  const [isOkRequest, setIsOkRequest] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  //стейт для ошибки в мувис
  const [isMoviesError, setIsMoviesError] = React.useState(false);
  //для хранения фильмов в избранном
  const [favoriteMovies, setFavoriteMovies] = React.useState([]);

  /* -------------------- API ------------------- */
  const auth = new Auth({
    //тут будет ссылка на мой бэк
    baseUrl: 'http://localhost:3001',
  });

  const mainApi = new MainApi({
    //тут будет ссылка на мой бэк
    url: 'http://localhost:3001',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });

  const moviesApi = new MoviesApi({
    url: 'https://api.nomoreparties.co/beatfilm-movies',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  /* -------------------- АВТОРИЗАЦИЯ И РЕГИСТРАЦИЯ -------------------- */
  //проверяем токен
  React.useEffect(() => {
    const jwt = localStorage.getItem('token');
    if (jwt) {
      //console.log(jwt);
      auth
        .checkToken()
        .then((res) => {
          setLoggedIn(true);
        })
        .catch((err) => {
          console.log(`${err}`);
          console.log(`код ошибки: ${err.statusError}`);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //функция на регистрацию
  const onRegister = (values) => {
    // qwerty qwerty@yandex.ru qwerty
    auth
      .register(values.name, values.email, values.password)
      .then(() => {
        onLogin(values);
      })
      .catch((err) => {
        console.log(`${err}`);
        setServerError(err);
      });
  };

  //функция на вход в приложение
  const onLogin = (values) => {
    auth
      .authorization(values.email, values.password)
      .then((data) => {
        if (data.token) {
          setLoggedIn(true);
          navigate('/movies', { replace: true });
        }
      })
      .catch((err) => {
        console.log(`${err}`);
        setServerError(err);
      });
  };

  //функция на выход из приложения
  const onSignOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('searchedMovies');
    localStorage.removeItem('inputVal');
    localStorage.removeItem('checkboxState');
    navigate('/', { replace: true });
    setLoggedIn(false);
  };

  /* --------------- ПОЛЬЗОВАТЕЛЬ + ПОЛУЧЕНИЕ ВСЕХ КАРТОЧЕК --------------- */

  //получаем информацию о пользователе и ВСЕ карточки
  React.useEffect(() => {
    loggedIn &&
      Promise.all([mainApi.getUserInfo(), moviesApi.getAllMovies()])
        .then(([userData, initialMovies, savedMoviesArr]) => {
          setCurrentUser(userData);
          setMovies(initialMovies);
          console.log(initialMovies);
          setIsMoviesError(false);
        })
        .catch((err) => {
          console.error(`Ошибка: ${err}`);
          setIsMoviesError(true);
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedIn]);

  //обновление данных
  const handleUpdateUser = (data) => {
    mainApi
      .updateUserInfo(data)
      .then((data) => {
        console.log('data update:', data);
        setCurrentUser(data);
        setIsOkRequest(true);
      })
      .catch((err) => {
        console.error(`${err}`);
        setServerError(err);
        setIsOkRequest(false);
      });
  };

  /*------------- ДОБАВИТЬ И УДАЛИТЬ ФИЛЬМЫ -------------- */

  const handleToggleLikeMovie = (movie, isLiked, id) => {
    if (isLiked) {
      handleRemoveMovie(id);
    } else {
      mainApi
        .saveMovie(movie)
        .then((newLikedMovie) => {
          console.log('Na menya clicknyli');
          //после сохранения фильма сетни его в массив
          setFavoriteMovies([...favoriteMovies, newLikedMovie]);
          console.log(favoriteMovies);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  React.useEffect(() => {
    console.log('юзэффект', favoriteMovies);
  }, [favoriteMovies]);

  const handleRemoveMovie = (id) => {
    mainApi
      .deleteMovie(id)
      .then(() => {
        setFavoriteMovies(favoriteMovies.filter((m) => m._id !== id));
      })
      .catch((err) => {
        console.error(`Ошибка: ${err}`);
      });
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      {isLoading ? (
        <Preloader />
      ) : (
        <div className="App">
          <div className="page">
            {pathname === '/' ||
            pathname === '/movies' ||
            pathname === '/saved-movies' ||
            pathname === '/profile' ? (
              <Header />
            ) : null}
            <main className="main">
              <Routes>
                <Route
                  path="/"
                  element={
                    loggedIn ? <Navigate to="/movies" replace /> : <Main />
                  }
                />
                <Route
                  path="/signup"
                  element={
                    <Register
                      onRegister={onRegister}
                      serverError={serverError}
                    />
                  }
                />
                <Route
                  path="/signin"
                  element={
                    <Login onLogin={onLogin} serverError={serverError} />
                  }
                />
                <Route path="*" element={<PageNotFound />} />

                <Route
                  path="/movies"
                  element={
                    <ProtectedRoute
                      element={Movies}
                      loggedIn={loggedIn}
                      movies={movies}
                      favoriteMovies={favoriteMovies}
                      onToggleLike={handleToggleLikeMovie}
                      moviesError={isMoviesError}
                    />
                  }
                />
                <Route
                  path="/saved-movies"
                  element={
                    <ProtectedRoute
                      element={SavedMovies}
                      loggedIn={loggedIn}
                      onRemoveMovie={handleRemoveMovie}
                      favoriteMovies={favoriteMovies}
                    />
                  }
                />
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute
                      element={Profile}
                      onSignOut={onSignOut}
                      onUpdateProfile={handleUpdateUser}
                      loggedIn={loggedIn}
                      isOkRequest={isOkRequest}
                    />
                  }
                />
              </Routes>
            </main>
            {pathname === '/' ||
            pathname === '/movies' ||
            pathname === '/saved-movies' ? (
              <Footer />
            ) : null}
          </div>
        </div>
      )}
    </CurrentUserContext.Provider>
  );
}

export default App;
