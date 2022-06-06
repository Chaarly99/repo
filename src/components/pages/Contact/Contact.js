import "./Contact.css"
import React, {useState} from "react";
import Navbar from '../../Navbar/Navbar'
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';
import axios from "axios";

const Contacto = () => {
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [comments, setComments] = useState("");
    const [loading, setLoading] = useState(false);

    const submitHandler = async (e) => {
        e.preventDefault();
        if(!email || !subject || !comments){
            return toast.error('Por favor rellene el email, asunto y mensaje.')
        }
        try {
            setLoading(true)
            const { data } = await axios.post(`/api/email`, {
                email,
                subject,
                comments,
            });
            setLoading(false);
            toast.success(data.message);
        } catch (error) {
            setLoading(false);
            toast.error(
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
            );
        }
    }

    return(
        <>
        <Navbar />
        <div className="container">
            <ToastContainer position="top-center" limit={1} />
            <div className="app-wrapper">
                <div>
                    <h2 className="title">Contacto</h2>
                </div>
                <div className="form-wrapper">
                    <div className="email">
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            className="form-control"
                            id="email"
                            required
                            onChange={(event) => setEmail(event.target.value)}
                            name="email" />
                    </div>
                    <div className="subject">
                        <label htmlFor="subject">Asunto</label>
                        <input
                            type="text"
                            className="form-control"
                            id="subject"
                            required
                            onChange={(event) => setSubject(event.target.value)}
                            name="subject" />
                    </div>
                    <div className="comments">
                        <label htmlFor="comments">Comentarios</label>
                        <textarea
                            className="form-control" 
                            id="comments"
                            required
                            onChange={(event) => setComments(event.target.value)}
                            name="comments" rows="4" cols="50"/>
                    </div>
                    <button disabled={loading} className="submit" 
                        onClick={submitHandler}
                        {...loading ? 'Sending...' : 'Submit'}>
                    Enviar
                    </button>
                </div>
            </div>
        </div>
        </>)
};

export default Contacto;