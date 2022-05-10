import "./Login.css"
import React, { Component } from 'react';
import axios from 'axios';
import appConfig from '../../appConfig';

export default class Login extends Component{
    constructor(props){
        //Inicializamos el constructor del componente padre
        super(props);
        //Funciones binding 
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.changeStateApp = this.props.onTryLogin;
        //Definición del estado del componente
        this.state ={
            email: '',
            passwd: ''
        }
    }

    async handleClick(){
        let response = await axios.post(appConfig.urlBackend + 'Users', this.state);
        if(response.data.length == 1){
            //actualizar el estado de logged en el componente App
            this.changeStateApp(true, response.data[0].email)
        }else{
            alert("El email o contraseña es incorrecto")
        }
    }
    //Capturamos el evento onChange de los inputs de forma asíncrona,
    //al cambiarse el valor lo capturamos inmediatamente
    async handleChange(e){
        if(e.target.email == 'email'){
            await this.setState({
                email: e.target.value,
            });
        }else{
            await this.setState({
                passwd: e.target.value,
            });
        }
    }

    render(){
        return(
            <div className="container">
                <div className="app-wrapper">
                    <div>
                        <h2 className="title">Login</h2>
                    </div>
                    <form className="form-wrapper">
                        <div className="email">
                            <label className="label">Email</label>
                            <input 
                                className="input"
                                type="email"
                                name="email"
                                onChange={this.handleChange}
                            /> 
                        </div>
                        <div className="password">
                            <label className="label">Contraseña</label>
                            <input 
                                className="input"
                                type="password"
                                name="passwd"
                                onChange={this.handleChange}
                            />
                        </div>
                        <div>
                            <input className="button" onClick={this.handleClick}>
                                Iniciar sesión
                            </input>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}


