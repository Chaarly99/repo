import "./Login.css"
// import useForm from "../useForm";
import { useNavigate } from "react-router-dom";
import React, {Component} from "react";
import {withRouter} from '../withRouter';
import UserDataService from "../../../services/user.service";

class Login extends Component {
    
    constructor(props) {
        super(props);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePasswd = this.onChangePasswd.bind(this);
        this.findUser = this.findUser.bind(this);
        this.newUser = this.newUser.bind(this);
        this.state = {
          id: null,
          email: "", 
          passwd: ""
        };
      }
      onChangeEmail(e) {
        this.setState({
          email: e.target.value
        });
      }
      onChangePasswd(e) {
        this.setState({
          passwd: e.target.value
        });
      }  
      findUser() {
        var data = {
          email: this.state.email,
          passwd: this.state.passwd
        };
        UserDataService.findByEmail_passwd(data)
          .then(response => {
            this.setState({
              email: response.data.email,
              passwd: response.data.passwd,
            });
            console.log(response.data);
            
            const navigate = useNavigate();
            navigate('/resumen');

          })
          .catch(e => {
            console.log(e);
            alert("El usuario especificado no existe.")
          });
      }
      newUser() {
        this.setState({
          id: null,
          email: "",
          passwd: ""
        });
      }

    render() {
        return(
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
                            value={this.state.email}
                            onChange={this.onChangeEmail}
                            name="email"
                        />
                    </div>
                    <div className="password">
                        <label htmlFor="passwd">Contraseña</label>
                        <input
                            type="text"
                            className="form-control"
                            id="passwd"
                            required
                            value={this.state.passwd}
                            onChange={this.onChangePasswd}
                            name="passwd"
                        />
                    </div>
                    <button onClick={this.findUser} className="submit">
                    Iniciar Sesión
                    </button>
                </div>
            </div>
        </div>
        )
    }
};

export default withRouter(Login);
