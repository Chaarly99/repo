import "./Register.css"
// import useForm from "../useForm";
import React, { useState } from "react";

const Register = ({submitForm}) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [passwd, setPassword] = useState('')


    /* const {handleFormSubmit, values, errors} = useForm(
        submitForm
    ); */

    async function registerUser(event) {
        event.preventDefault();
        const response = await fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name, 
                email,
                passwd,
            }),
        })

        const data = await response.json();
        console.log(data)
    }

    return(
        <div className="container">
            <div className="app-wrapper">
                <div>
                    <h2 className="title">Crear cuenta</h2>
                </div>
                <form className="form-wrapper" onSubmit={registerUser}>
                    <div className="name">
                        <label className="label">Nombre</label>
                        <input 
                            className="input"
                            type="text"
                            name="name"
                            value={name} //values.name
                            onChange={(e) => setName(e.target.value)} //handleChange
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
                            onChange={(e) => setEmail(e.target.value)} //handleChange
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
                            onChange={(e) => setPassword(e.target.value)} //handleChange
                        />
                        {/* {errors.passwd && <p className="error">{errors.passwd}</p>} */}
                    </div>
                    <div>
                        <button className="submit" >
                            Registrarse
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Register;