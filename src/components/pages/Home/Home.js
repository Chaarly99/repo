import "./Home.css";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import video from '../../../media/video_inicio_Per4mance.mp4';
import Navbar from '../../Navbar/Navbar';
import logo from '../../../media/Performance-logo-sinfondo.png';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import instagram from '../../../media/instagram.webp';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import pdf from "../../../media/Modelo-de-Aviso-de-Privacidad-Per4mance.pdf"

const Home = () => {
    const navigate = useNavigate();
    const gotoLogin = () => {
        navigate('/login')
    }
    const gotoContact = () => {
        navigate('/contacto')
    }
    const gotoAbout = () => {
        navigate('/about')
    }
    return(
        <>
        <Navbar />
        <main id='main'>
            <div className="home">
                <video autoPlay loop muted>
                    <source src={video} type='video/mp4'/>
                </video>
            </div>
            <section id="cta" class="wrapper style3">
                <div>
                    <h2 id="h2Login">Garantice al máximo el éxito en su rendimiento </h2>
                    <Button className="bt1" onClick={gotoLogin}>Iniciar sesión</Button>{' '}
                </div>
            </section>
            <Paper
                sx={{
                p: 2,
                margin: 'auto',
                height: '100vh',
                flexGrow: 1,
                backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                }}
            >
                <section className="wrapper style1">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm container>
                            <Grid className="social1" item xs container direction="column" spacing={2} margin={'0.5em'} height={'60vh'}>
                                <Typography gutterBottom variant="h4" component="div">
                                ¡Encuéntranos en las redes sociales!
                                Apoya nuestra comunidad siguiéndonos en nuestras redes sociales.
                                </Typography>
                            </Grid>
                            <Grid className="social2" item xs>
                                <img className='insta' alt="instagram" src={instagram} />
                            </Grid>
                        </Grid>
                    </Grid>
                </section>
            </Paper>
        </main>
		<div id="footer">
            <div className="container">
                <div className="foot">
                    <section class="col-3 col-6-narrower col-12-mobilep px-5">
                        <div className="logo">
                            <img src={logo} alt="logo"></img>
                        </div>
                        <ul class="links">
                            <li></li>
                            <li><FontAwesomeIcon icon={faEnvelope} /> carlosparro2010@gmail.com</li>
                        </ul>
                    </section>
                    <section class="col-3 col-6-narrower col-12-mobilep px-5">
                        <h3>Secciones</h3>
                        <ul class="links">
                            <li>Home</li>
                            <li className="secs" onClick={gotoContact}>Contacto</li>
                            <li className="secs" onClick={gotoAbout}>Quiénes Somos</li>
                            <li className="secs" onClick={gotoLogin}>Inicio de Sesión</li>
                        </ul>
                    </section>
                    <section class="col-3 col-6-narrower col-12-mobilep px-5">
                        <h3>Reglamento</h3>
                        <ul class="links">
                            <li><a className="terms" href={pdf} target="_blank" rel="noopener noreferrer" download="Aviso_de_privacidad.pdf">Términos y Condiciones</a></li>
                        </ul>
                    </section>
                </div>
            </div>

            <ul class="icons">
                <li><a href="https://github.com/Chaarly99/repo"><span className="label"><FontAwesomeIcon icon={['fab', 'fa-github']} />GitHub</span></a></li>
                <li><a href="https://www.linkedin.com/in/carlos-parro-p%C3%A9rez-5907aa153/"><FontAwesomeIcon icon={['fab', 'fa-linkedin-in']} /><span className="label">LinkedIn</span></a></li>
                <li><a href="https://www.instagram.com/per4mance_app/"><FontAwesomeIcon icon={['fab', 'fa-instagram']} /><span className="label">Instagram</span></a></li>
            </ul>

            <div class="copyright">
                <ul class="menu">
                    <li>&copy; Per4mance. All rights reserved</li>
                </ul>
            </div>
        </div>
        </>
    )
};

export default Home;

