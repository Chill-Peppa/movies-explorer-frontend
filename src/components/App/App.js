import React from 'react';
import './App.css';
//import Header from './Header';
//import PageNotFound from './PageNotFound';
//import Register from './Register';
// import Login from '../Login/Login';
//import Main from '../Main/Main';
import Movies from '../Movies/Movies';

function App() {
  return (
    <div className="App">
      <div className="page">
        {/*<Main />*/}
        <Movies />
      </div>
    </div>
  );
}

export default App;