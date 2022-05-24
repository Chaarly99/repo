import { useState, useEffect } from "react";
import validation from "./validationRegister";

const useForm = (submitForm) =>{

    const [values, setValues] = useState({
        name: "",
        email: "",
        passwd: ""
    });

    const [errors, setErrors] = useState({});

    const [dataIsCorrect, setDataIsCorrect] = useState(false);

    const handleChange = (event) =>{
        setValues({
            ...values,
            [event.target.name]: event.target.value,
            [event.target.email]: event.target.value,
            [event.target.passwd]: event.target.value,
        })
    };
    const handleFormSubmit = (event) =>{
        event.preventDefault();
        setErrors(validation(values));
        setDataIsCorrect(true);
    };

    useEffect(() =>{
        if(Object.keys(errors).length === 0 && dataIsCorrect){
            submitForm(true);
        }
    }, [errors]);

    return {handleChange, handleFormSubmit, errors, values};
}

export default useForm;