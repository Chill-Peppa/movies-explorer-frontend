import React from 'react';
import './App.css';
//import Header from './Header';
//import PageNotFound from './PageNotFound';
//import Register from '../Register/Register';
//import Login from '../Login/Login';
import Profile from '../Profile/Profile';
//import Main from '../Main/Main';
//import Movies from '../Movies/Movies';
//import SavedMovies from '../SavedMovies/SavedMovies';
// import Profile from '../Profile/Profile';

function App() {
  return (
    <div className="App">
      <div className="page">
        <Profile />
        {/*<Main />*/}
        {/*<Movies />*/}
        {/*<SavedMovies />*/}
      </div>
    </div>
  );
}

export default App;
