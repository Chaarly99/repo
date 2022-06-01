import "./Register.css"
// import useForm from "../useForm";
import React, {Component} from "react";
import UserDataService from "../../../services/user.service";

import Navbar from '../../Navbar/Navbar'

class Register extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePasswd = this.onChangePasswd.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onChangeWeight = this.onChangeWeight.bind(this);
        this.onChangeHeight = this.onChangeHeight.bind(this);
        this.onChangeSexo = this.onChangeSexo.bind(this);
        this.onChangeActivity = this.onChangeActivity.bind(this);
        this.saveUser = this.saveUser.bind(this);
        this.newUser = this.newUser.bind(this);
        this.state = {
          id: null,
          name: "",
          email: "", 
          passwd: "",
          age: 0,
          weight: 0, 
          height: 0,
          sexo: "",
          activity: 0,
          cal_perd_sem: [],
          cal_perd_mes: [],
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
    onChangeAge(e) {
        this.setState({
            age: e.target.value
        });
    }
    onChangeWeight(e) {
        this.setState({
            weight: e.target.value
        });
    }
    onChangeHeight(e) {
        this.setState({
            height: e.target.value
        });
    } 
    onChangeSexo(e) {
        this.setState({
            sexo: e.target.value
        });
    }   
    onChangeActivity(e) {
        this.setState({
            activity: e.target.value
        });
    }     
    saveUser() {
    var data = {
        name: this.state.name,
        email: this.state.email,
        passwd: this.state.passwd,
        age: this.state.age,
        weight: this.state.weight,
        height: this.state.height,
        sexo:  this.state.sexo,
        activity: this.state.activity,
        cal_perd_sem: [],
        cal_perd_mes: []
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
        age: 0,
        weight: 0, 
        height: 0,
        sexo: "",
        activity: 0,
        published: false,
        submitted: false
    });
    }

    render() {
        return(
            <>
            <Navbar />
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
                    <div className="age">
                        <label htmlFor="age">Edad</label>
                        <input
                            type="number"
                            className="form-control"
                            id="age"
                            required
                            value={this.state.age}
                            onChange={this.onChangeAge}
                            name="age"
                            placeholder="20"
                        />
                        {/* {errors.name && <p className="error">{errors.name}</p>} */}
                    </div>
                    <div className="height">
                        <label htmlFor="height">Altura</label>
                        <input
                            type="number"
                            className="form-control"
                            id="height"
                            required
                            value={this.state.height}
                            onChange={this.onChangeheight}
                            name="height"
                            placeholder="177"
                        />
                        {/* {errors.email && <p className="error">{errors.email}</p>} */}
                    </div>
                    <div className="weight">
                        <label htmlFor="weight">Peso</label>
                        <input
                            type="number"
                            className="form-control"
                            id="weight"
                            required
                            value={this.state.weight}
                            onChange={this.onChangeWeight}
                            name="weight"
                            placeholder="70"
                        />
                        {/* {errors.passwd && <p className="error">{errors.passwd}</p>} */}
                    </div>
                    <div className="sexo">
                        <label htmlFor="sexo">Sexo</label>
                        <input
                            type="text"
                            className="form-control"
                            id="sexo"
                            required
                            value={this.state.sexo}
                            onChange={this.onChangeSexo}
                            name="sexo"
                        />
                        {/* {errors.passwd && <p className="error">{errors.passwd}</p>} */}
                    </div>
                    <div className="activity">
                        <label htmlFor="activity">Actividad</label>
                        <input
                            type="text"
                            className="form-control"
                            id="activity"
                            required
                            value={this.state.activity}
                            onChange={this.onChangeActividad}
                            name="activity"
                        />
                    </div>
                    <button onClick={this.saveUser} className="submit">
                    Registrarse
                    </button>
                </div>
            </div>
            )}
            </div>
        </>)}
};

export default Register;