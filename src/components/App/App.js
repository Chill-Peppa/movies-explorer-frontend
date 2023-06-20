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

function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  //это будет стейт для данных юзера (будем его использовать потом с апишками)
  const [currentUser, setCurrentUser] = React.useState({ name: '', about: '' });
  //стейт для авторизации
  const [loggedIn, setLoggedIn] = React.useState(false);
  //стейт для фильмов
  const [movies, setMovies] = React.useState([]);

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
      console.log(jwt);
      auth
        .checkToken()
        .then((res) => {
          setLoggedIn(true);
        })
        .catch((err) => {
          console.log(`${err}`);
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
        console.error(err);
      });
  };

  //функция на выход из приложения
  const onSignOut = () => {
    localStorage.removeItem('token');
    navigate('/', { replace: true });
    setLoggedIn(false);
  };

  /* --------------- ОСТАЛЬНОЕ, ПОКА БЕЗ РАЗДЕЛЕНИЯ --------------- */
  React.useEffect(() => {
    loggedIn &&
      Promise.all([mainApi.getUserInfo(), moviesApi.getAllMovies()])
        .then(([userData, initialMovies]) => {
          setCurrentUser(userData);
          console.log('user array:', userData);
          setMovies(initialMovies);
          console.log('movies array:', initialMovies);
        })
        .catch((err) => {
          console.error(`Ошибка: ${err}`);
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedIn]);

  const handleUpdateUser = (data) => {
    mainApi
      .updateUserInfo(data)
      .then((data) => {
        console.log('data update:', data);
        setCurrentUser(data);
      })
      .catch((err) => {
        console.error(`Ошибка: ${err}`);
      });
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
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
                element={<Register onRegister={onRegister} />}
              />
              <Route path="/signin" element={<Login onLogin={onLogin} />} />
              <Route path="*" element={<PageNotFound />} />

              <Route
                path="/movies"
                element={
                  <ProtectedRoute
                    element={Movies}
                    loggedIn={loggedIn}
                    movies={movies}
                  />
                }
              />
              <Route
                path="/saved-movies"
                element={
                  <ProtectedRoute
                    element={SavedMovies}
                    loggedIn={loggedIn}
                    movies={movies}
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
    </CurrentUserContext.Provider>
  );
}

export default App;
