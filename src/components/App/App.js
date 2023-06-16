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
import { auth } from '../../utils/auth';

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

  /* -------------------- АВТОРИЗАЦИЯ И РЕГИСТРАЦИЯ -------------------- */
  //проверяем токен
  React.useEffect(() => {
    const jwt = localStorage.getItem('token');

    if (jwt) {
      auth
        .checkToken()
        .then((res) => {
          setLoggedIn(true);
        })
        .catch((err) => {
          console.log(`${err}`);
        });
    }
  }, [navigate]);

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
    navigate('/signin', { replace: true });
    setLoggedIn(false);
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
              <Route path="/" element={<Main />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/saved-movies" element={<SavedMovies />} />
              <Route
                path="/profile"
                element={<Profile onSignOut={onSignOut} />}
              />
              <Route
                path="/signup"
                element={<Register onRegister={onRegister} />}
              />
              <Route path="/signin" element={<Login onLogin={onLogin} />} />
              <Route path="*" element={<PageNotFound />} />
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
