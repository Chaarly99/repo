import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import { BrowserRouter, Route, Routes} from 'react-router-dom';

import Login from './components/pages/Login/Login'
import Register from './components/pages/Register/Register'
import Home from './components/pages/Home/Home'
import About from './components/pages/About/About'
import Contact from './components/pages/Contact/Contact'

import Summary from './components/pages/Summary/Summary'
import Evolution from './components/pages/Evolution/Evolution'
import Tips from './components/pages/Tips/Tips'
import Profile from './components/pages/Profile/Profile'

import NotFound from './components/pages/NotFound';


const updateState = (logged, email) => {
  this.setState({
    logged: logged,
    email: email,
  });
}

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/contacto' element={<Contact/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/login' element={<Login onTryLogin={this.updateState}/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/register/:id' element={<Register/>} />
      <Route path='/resumen' element={<Summary/>} />
      <Route path='/evolucion' element={<Evolution/>} />
      <Route path='/consejos' element={<Tips/>} />
      <Route path='/perfil' element={<Profile/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
  <App />
  </BrowserRouter>,
  document.getElementById('root')
);
