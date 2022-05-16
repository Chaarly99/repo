import "./Register.css"
// import useForm from "../useForm";
import React, {Component} from "react";
import api from '../../../api/index'

class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            passwd: '',
        }
    }

    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name })
    }

    handleChangeInputEmail = async event => {
        const email = event.target.validity.valid
            ? event.target.value
            : this.state.email

        this.setState({ email })
    }

    handleChangeInputPasswd = async event => {
        const passwd = event.target.value
        this.setState({ passwd })
    }

    handleIncludeUser = async () => {
        const { name, email, passwd } = this.state
        const payload = { name, email, passwd }

        await api.insertUser(payload).then(() => {
            window.alert(`User inserted successfully`)
            this.setState({
                name: '',
                email: '',
                passwd: '',
            })
        })
    }

    submit = e => {
        e.preventDefault();
        alert('it works!');
    }

    render() {
        const { name, email, passwd } = this.state
        return(
            <div className="container">
                <div className="app-wrapper">
                    <div>
                        <h2 className="title">Crear cuenta</h2>
                    </div>
                    <form className="form-wrapper" onSubmit={this.submit}>
                        <div className="name">
                            <label className="label">Nombre</label>
                            <input 
                                className="input"
                                type="text"
                                name="name"
                                value={name} //values.name
                                onChange={this.handleChangeInputName}
                            />
                                {/* {errors.name && <p className="error">{errors.name}</p>} */}
                        </div>
                        <div className="email">
                            <label className="label">Email</label>
                            <input 
                                className="input"
                                type="email"
                                name="email"
                                value={email} //values.email
                                onChange={this.handleChangeInputEmail}
                            />
                            {/* {errors.email && <p className="error">{errors.email}</p>} */}
                        </div>
                        <div className="password">
                            <label className="label">Contraseña</label>
                            <input 
                                className="input"
                                type="password"
                                name="passwd"
                                value={passwd} //values.passwd
                                onChange={this.handleChangeInputPasswd}
                            />
                            {/* {errors.passwd && <p className="error">{errors.passwd}</p>} */}
                        </div>
                        <div>
                            <button className="submit" onClick={this.handleIncludeUser}>
                                Registrarse
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )}
};

export default Register;