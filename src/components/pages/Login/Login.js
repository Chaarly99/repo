import "./Login.css"
// import useForm from "../useForm";
import { useNavigate } from "react-router-dom";
import React, {useState} from "react";
import UserDataService from "../../../services/user.service";

import Navbar from '../../Navbar/Navbar'

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
/*   const [cal_perd, setCalPerd] = useState(0);
  const [objetivo, setObjetivo] = useState(0);
  const [cal_perd_sem, setCalPerdSem] = useState([]);
  const [cal_perd_mes, setCalPerdMes] = useState([]); */

/*   const updateEmail = e => ;
  const updatePassword = e => ;
 */
  const navigate = useNavigate();

  const findUser = () => {
    var data = {
      email: email.value,
      passwd: password
    };

    UserDataService.findByEmail_passwd(data)
      .then(response => {
        localStorage.setItem('user', response.data)
        alert("Se ha encontrado al usuario.")
        navigate('/resumen')
      })
      .catch(e => {
        console.log(e);
        alert("El usuario especificado no existe.")
      });
  }
  
  return (
    <>
    <Navbar />
    <div className="container">
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
