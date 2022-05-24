import "./User_data_form.css"
// import useForm from "../useForm";
import React, {Component} from "react";
import axios from 'axios';
import {withRouter} from './withRouter';

class User_data_form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {
                name: '',
                email: '',
                passwd: '',
            },
        };
        this.yourFunctionHere=this.yourFunctionHere.bind(this);
    }

    /* onChangeUserName = this.onChangeUserName.bind(this);
    onChangeUserEmail = this.onChangeUserEmail.bind(this);
    onChangeUserPasswd = this.onChangeUserPasswd.bind(this);
    onSubmit = this.onSubmit.bind(this); */
    
   /*  onChangeUserName = (event) => {
        const name = { ...this.state.user, name: event.target.value };
        this.setState({ name });
    }

    onChangeUserEmail = (event) => {
        const email = { ...this.state.user, email: event.target.value };
        this.setState({ email });
    }

    onChangeUserPasswd = (event) => {
        const passwd = { ...this.state.user, passwd: event.target.value };
        this.setState({ passwd });
    } */

    yourFunctionHere()
    {
        this.props.navigate('/resumen')
    }

    onSubmit(e) {
        e.preventDefault()
        const { name, email, passwd } = this.state
        const payload = { name, email, passwd }
        // console.log(payload)

        axios.post('http://192.168.1.94:3000/users/User_data_form', payload)
            .then((res) => {
                console.log(res.data);
                this.yourFunctionHere();
            }).catch(() =>
                this.yourFunctionHere()
            )
    }

    render() {
        /* const { name, email, passwd } = this.state */
        return(
            <div className="container">
                <div className="app-wrapper">
                    <div>
                        <h2 className="title">Crear cuenta</h2>
                    </div>
                    <form className="form-wrapper">
                        <div className="name">
                            <label className="label">Nombre</label>
                            <input 
                                className="input"
                                type="text"
                                name="name"
                                //value={this.state.user.name} //values.name
                                // onChange={this.onChangeUserName.bind(this)}
                                onChange = {(e) => this.setState({ name: e.target.value})}
                            />
                                {/* {errors.name && <p className="error">{errors.name}</p>} */}
                        </div>
                        <div className="email">
                            <label className="label">Email</label>
                            <input 
                                className="input"
                                type="email"
                                name="email"
                                //value={this.state.user.email} //values.email
                                // onChange={this.onChangeUserEmail.bind(this)}
                                onChange = {(e) => this.setState({ email: e.target.value})}
                            />
                            {/* {errors.email && <p className="error">{errors.email}</p>} */}
                        </div>
                        <div className="password">
                            <label className="label">Contraseña</label>
                            <input 
                                className="input"
                                type="password"
                                name="passwd"
                                //value={this.state.user.passwd} //values.passwd
                                // onChange={this.onChangeUserPasswd.bind(this)}
                                onChange = {(e) => this.setState({ passwd: e.target.value})}
                            />
                            {/* {errors.passwd && <p className="error">{errors.passwd}</p>} */}
                        </div>
                        <div>
                            <button className="submit" onClick={(e) => this.onSubmit(e)} >
                                Registrarse
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )}
};

export default withRouter(Register);