import { useState } from "react";
import Register from "./Register";
import RegisterSuccess from "./RegisterSuccess";

const Form = () =>{
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);

    const submitForm = () => {
        setFormIsSubmitted(true);
    }
    return ( 
    <div>
        {!formIsSubmitted ? (
            <Register submitForm={submitForm}/>
        )  : (
            <RegisterSuccess />
        )}
        </div>
    );
};

export default Form;