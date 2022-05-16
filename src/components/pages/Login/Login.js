import "./Login.css"
// import useForm from "../useForm";
import { useNavigate } from "react-router-dom";
import React, {Component} from "react";
import api from '../../../api/index'

class Login extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            passwd: '',
        }
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
        const { email, passwd } = this.state
        const payload = { email, passwd }

        await api.getUserById(payload).then(() => {
            window.alert(`User Login successfully`)
            this.setState({
                email: '',
                passwd: '',
            })
            const navigate = useNavigate();
            navigate('/resumen');
        })
    }

    render() {
        const { email, passwd } = this.state
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
                                Iniciar Sesión
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )}
};

export default Login;
