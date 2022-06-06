import "./Register.css"
// import useForm from "../useForm";
import React, {Component} from "react";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';
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

    saveUser = async (e) => {
        e.preventDefault();
        if(!this.state.name 
            || !this.state.email 
            || !this.state.passwd 
            || !this.state.age
            || !this.state.weight 
            || !this.state.height
            || !this.state.sexo
            || !this.state.activity
            || !this.state.cal_perd_sem
            || !this.state.cal_perd_mes){
            return toast.error('Por favor rellene todos los campos.')
        }else{
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
                return toast.error('¡El usuario se ha registrado correctamente!')
                })
                .catch(e => {
                    console.log(e);
                });
        }
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
                <div className="app-wrapper">
                    <ToastContainer position="top-center" limit={1} />
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
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
                                            onChange={this.onChangeName}
                                            name="name"
                                        />
                                    </div>
                                    <div className="email">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="email"
                                            required
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
                                            onChange={this.onChangePasswd}
                                            name="passwd"
                                        />
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs>
                                <div className="age">
                                    <label htmlFor="age">Edad</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="age"
                                        required
                                        onChange={this.onChangeAge}
                                        name="age"
                                        placeholder="20"
                                    />
                                </div>
                                <div className="height">
                                    <label htmlFor="height">Altura</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="height"
                                        required
                                        onChange={this.onChangeheight}
                                        name="height"
                                        placeholder="177"
                                    />
                                </div>
                                <div className="weight">
                                    <label htmlFor="weight">Peso</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="weight"
                                        required
                                        onChange={this.onChangeWeight}
                                        name="weight"
                                        placeholder="70"
                                    />
                                </div>
                                <div className="sexo">
                                    <label htmlFor="sexo">Sexo</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="sexo"
                                        required
                                        onChange={this.onChangeSexo}
                                        name="sexo"
                                    />
                                </div>
                                <div className="activity">
                                    <label htmlFor="activity">Actividad</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="activity"
                                        required
                                        onChange={this.onChangeActividad}
                                        name="activity"
                                    />
                                    <Typography gutterBottom variant="subtitle2" component="div">
                                    <ul>
                                        <li><b>1.</b> No hago ejercicio diariamente.</li>

                                        <li><b>2.</b> Hago ejercicio de vez en cuando</li>

                                        <li><b>3.</b> Hago ejercicio varias veces a la semana.</li>

                                        <li><b>4.</b> Hago ejercicio todos los dias.</li>
                                    </ul>
                                    </Typography>
                                </div>
                                <button onClick={this.saveUser} className="submit">
                                Registrarse
                                </button>
                            </Grid>
                        </Grid>
                    </Grid>   
                </div>
            </div>
        </>
        )
    }
}


export default Register;