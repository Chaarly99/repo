import "./Login.css"
import useForm from "../useForm";
import React, { useState } from "react";

const Login = ({submitForm}) => {
    const [email, setEmail] = useState('')
    const [passwd, setPassword] = useState('')


    const {handleFormSubmit, values, errors} = useForm(
        submitForm
    );

    async function loginUser(event) {
        event.preventDefault();
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
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
                    <h2 className="title">Login</h2>
                </div>
                <form className="form-wrapper" onSubmit={loginUser}>
                    <div className="email">
                        <label className="label">Email</label>
                        <input 
                            className="input"
                            type="email"
                            name="email"
                            value={values.email} //values.email
                            onChange={(e) => setEmail(e.target.value)} //handleChange
                        />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                    <div className="password">
                        <label className="label">Contraseña</label>
                        <input 
                            className="input"
                            type="password"
                            name="passwd"
                            value={values.passwd} //values.passwd
                            onChange={(e) => setPassword(e.target.value)} //handleChange
                        />
                        {errors.passwd && <p className="error">{errors.passwd}</p>}
                    </div>
                    <div>
                        <button className="submit" onClick={handleFormSubmit}>
                            Iniciar Sesión
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Login;
