import "./Login.css"
// import useForm from "../useForm";
import { useNavigate } from "react-router-dom";
import React, {useState} from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';
import UserDataService from "../../../services/user.service";

import Navbar from '../../Navbar/Navbar'

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }

  const findUser = async (e) => {
    e.preventDefault();
    if(!email || !password){
      return toast.error('Por favor rellene todos los campos.')
    }else{
      var data = {
        email: email,
        passwd: password
      };
      UserDataService.findByEmail_passwd(data)
      .then((response) => 
        localStorage.setItem('user', JSON.stringify(response.data)),
        delay(3000).then(() => navigate('/resumen'))
      ) 
      .catch(e => {
          console.log(e);
          alert("El usuario especificado no existe.")
      });
    }
  }
  
  return (
    <>
    <Navbar />
    <div className="container">
      <ToastContainer position="top-center" limit={1} />
      <div className="app-wrapper">
        <div>
          <h2 className="title">Login</h2>
        </div>
        <div className="form-wrapper">
          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="form-control"
              id="email"
              required
              onChange={(event) => setEmail(event.target.value)}
              name="email" />
          </div>
          <div className="password">
            <label htmlFor="passwd">Contraseña</label>
            <input
              type="text"
              className="form-control"
              id="passwd"
              required
              onChange={(event) => setPassword(event.target.value)}
              name="passwd" />
          </div>
          <button onClick={findUser}
            className="submit">
            Iniciar Sesión
          </button>
        </div>
      </div>
    </div>
  </>);
}
