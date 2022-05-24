const validationRegister = (values) => {
    let errors = {};
    if(!values.name){
        errors.name = "El nombre es requerido."
    }
    if(!values.email){
        errors.email = "El email es requerido."
    }else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email="Email es inválido."
    }
    if(!values.passwd){
        errors.passwd = "La contraseña es requerida."
    }else if(values.passwd.length < 5){
        errors.passwd="La contraseña debe ser mayor de cinco caracteres."
    }

    return errors;
};

export default validationRegister;