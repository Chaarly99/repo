import './App.css';
import React from "react";

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'

import Summary from './pages/Summary/Summary'
import Evolution from './pages/Evolution/Evolution'
import Tips from './pages/Tips/Tips'
import Profile from './pages/Profile/Profile'

import NotFound from './pages/NotFound';

import pdf from "../media/Modelo-de-Aviso-de-Privacidad-Per4mance.pdf"

function App() {
  const cookieStorage = {
    getItem: (key) => {
      const cookies = document.cookie
      .split(';')
      .map(cookie => cookie.split('='))
      .reduce((acc, [key, value]) => ({...acc, [key.trim()]: value}), {});
      return cookies[key];
    },
    setItem: (key, value) => {
      document.cookie = `${key}=${value}`
    },
  };

  const storageType = cookieStorage;
  const consentPropertyName = "jdc_consent";

  const shouldShowPopup = () => !storageType.getItem(consentPropertyName);
  const saveToStorage = () => storageType.setItem(consentPropertyName, true);

  window.onload = () => {

    const consentPopup = document.getElementById('consent-popup');
    const acceptBtn = document.getElementById('accept');

    const acceptFn = () => {
      saveToStorage(storageType);
      consentPopup.classList.add('hidden');
    }

    acceptBtn.addEventListener('click', acceptFn);

    if(shouldShowPopup(storageType)){
      /*const consent = confirm('¿Está de acuerdo con los términos y condiciones de la web?');
      if(consent){
        saveToStorage();
      }*/
      setTimeout(() => {
        consentPopup.classList.remove('hidden');
      }, 2000);
    }
  }
 /*  alert(localStorage.getItem('logged'))
  const [isLogged] = useState(localStorage.getItem('logged')); */

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/contacto' element={<Contact/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/resumen' element={<Summary/>} />
          <Route path='/evolucion' element={<Evolution/>} />
          <Route path='/consejos' element={<Tips/>} />
          <Route path='/perfil' element={<Profile/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </Router>

      <div id="consent-popup" className="hidden">
        <p>Usando este sitio aceptas nuestros <a href={pdf} target="_blank" rel="noopener noreferrer" download="Aviso_de_privacidad.pdf"> Términos y Condiciones</a>.
          Por favor <a id="accept" href='#'>Acepte</a> esto antes de usar nuestro sitio. 
        </p>     
      </div>

      <header className="App-header">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>      
        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
      </header>
      
    </div>
  );
}

export default App;


