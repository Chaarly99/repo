import "./Login.css"
import React from 'react';
import useForm from "../useForm";

const Login = ({submitForm}) => {
    const {handleChange, handleFormSubmit, values, errors} = useForm(
        submitForm
    );

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
                            value={values.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                    <div className="password">
                        <label className="label">Contraseña</label>
                        <input 
                            className="input"
                            type="password"
                            name="passwd"
                            value={values.passwd}
                            onChange={handleChange}
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
