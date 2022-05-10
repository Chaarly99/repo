
const User_Data_Form = () => {
    return(
        <div className="page-heading">
            <form>
                <h3>Toma de datos del Usuario</h3>

                <div className="form-group">
                    <label>Nombre</label>
                    <input type="text" className="form-control" placeholder="Nombre" />
                </div>

                <div className="form-group">
                    <label>Apellidos</label>
                    <input type="text" className="form-control" placeholder="Apellido" />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Ej: nombre@gmail.com" />
                </div>

                <div className="form-group">
                    <label>Contraseña</label>
                    <input type="password" className="form-control" placeholder="Contraseña" />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                <p className="forgot-password text-right">
                    Ya tiene una cuenta? <Link to="/Login">Iniciar Sesión</Link>
                </p>
            </form>
        </div>
    )
};

export default User_Data_Form;