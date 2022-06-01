import "./Contact.css"
import useForm from "../useForm";
import Navbar from '../../Navbar/Navbar'

const Contacto = ({submitForm}) => {
    const {handleChange, handleFormSubmit, values, errors} = useForm(
        submitForm
    );
    return(
        <>
        <Navbar />
        <div className="container">
            <div className="app-wrapper">
                <div>
                    <h2 className="title">Contacto</h2>
                </div>
                <form className="form-wrapper">
                    <div className="name">
                        <label className="label">Nombre</label>
                        <input 
                            className="input"
                            type="text"
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                        />
                            {errors.name && <p className="error">{errors.name}</p>}
                    </div>
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
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </>)
};

export default Contacto;