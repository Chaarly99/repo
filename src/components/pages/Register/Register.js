import "./Register.css"
// import useForm from "../useForm";
import React, {Component} from "react";
import UserDataService from "../../../services/user.service";

class Register extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePasswd = this.onChangePasswd.bind(this);
        this.saveUser = this.saveUser.bind(this);
        this.newUser = this.newUser.bind(this);
        this.state = {
          id: null,
          name: "",
          email: "", 
          passwd: "",
          submitted: false
        };
    }

    onChangeName(e) {
    this.setState({
        name: e.target.value
    });
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
    saveUser() {
    var data = {
        name: this.state.name,
        email: this.state.email,
        passwd: this.state.passwd
    };
    UserDataService.create(data)
        .then(response => {
        this.setState({
            id: response.data.id,
            name: response.data.name,
            email: response.data.email,
            passwd: response.data.passwd,
            published: response.data.published,
            submitted: true
        });
        console.log(response.data);
        })
        .catch(e => {
        console.log(e);
        });
    }
    newUser() {
    this.setState({
        id: null,
        name: "",
        email: "",
        passwd: "",
        published: false,
        submitted: false
    });
    }

    render() {
        return(
            <div className="container">
            {this.state.submitted ? (
            <div>
                <h4>¡El usuario se ha registrado correctamente!</h4>
                <button className="btn btn-success" onClick={this.newUser}>
                Volver
                </button>
            </div>
            ) : (
            <div className="app-wrapper">
                <div>
                    <h2 className="title">Crear cuenta</h2>
                </div>
                <div className="form-wrapper">
                    <div className="name">
                        <label htmlFor="name">Nombre</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            required
                            value={this.state.name}
                            onChange={this.onChangeName}
                            name="name"
                        />
                        {/* {errors.name && <p className="error">{errors.name}</p>} */}
                    </div>
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
                        {/* {errors.email && <p className="error">{errors.email}</p>} */}
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
                        {/* {errors.passwd && <p className="error">{errors.passwd}</p>} */}
                    </div>
                    <button onClick={this.saveUser} className="submit">
                    Registrarse
                    </button>
                </div>
            </div>
            )}
            </div>
        )}
};

export default Register;