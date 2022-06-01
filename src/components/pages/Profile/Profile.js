import "./Profile.css";
import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

import UserDataService from "../../../services/user.service";

import { styled } from '@mui/material/styles';
import Button from 'react-bootstrap/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Navbar2 from '../../Navbar2/Navbar';

import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function Profile() {

    useEffect(() => {
        findUser();
        // code to run after render goes here
      }, []); //[] run once

    const [name, setName] = useState("cparro");
    const [email, setEmail] = useState("carlosparro2010@gmail.com");
    const [password, setPassword] = useState("1234");
    const [age, setAge] = useState(0);
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [activity, setActivity] = useState(0);
    const [sexo, setSexo] = useState("");
    const [user, setUser] = useState(null);
    

    /*   const updateEmail = e => ;
    const updatePassword = e => ;
    */
    const navigate = useNavigate();

    const findUser = () => {
        var data = {
            email: email,
            passwd: password
        };
        UserDataService.findByEmail_passwd(data)
        .then((response) => setUser(JSON.stringify(response.data)))
        .catch(e => {
            console.log(e);
            alert("El usuario especificado no existe.")
        });
        console.log(user)
    }

    const deleteUser = () => {
        var id = {
            email: email
        };
        UserDataService.delete(id)
        .then(() => {
            alert("El usuario ha sido borrado correctamente.")
        })
        .catch(e => {
            console.log(e);
            alert("El usuario especificado no existe.")
        });
    }

    /* const newUser = () => {
        this.setState({
            email: "",
            passwd: "",
            age: 0,
            weight: 0,
            height: 0,
            activity: 0,
            sexo: ""
        });
    } */
  return (
    <>
        <Navbar2 />
        <Box>
        <div style={{ display: 'block', width: '100vw', padding: 30}}>
            <Row>
                <Col className='first'>
                    <h1>Perfil de User</h1>
                </Col>
                <Col className="second">
                    <Button className="bt1" onClick={()=>{navigate('/'); localStorage.clear();}}>Cerrar Sesión</Button>{' '}
                    <Button className="bt2" onClick={deleteUser}>Borrar Perfil</Button>{' '}
                </Col>
            </Row>
        </div>
        <div style={{ display: 'block', width: '100vw', padding: 30}}>
            <Row>
                <Col className='first'>
                    <Box gridColumn="span 1">
                        <h3>Edad</h3>
                        <Item>
                            <Paper
                                sx={{
                                p: 2,
                                margin: 'auto',
                                // height: 500,
                                flexGrow: 1,
                                backgroundColor: (theme) =>
                                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                                }}
                            >
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm container>
                                        <Grid item xs container direction="column" spacing={2}>
                                        {/* <Img alt="complex" src="/static/images/grid/complex.jpg" /> */}
                                        </Grid>
                                        <Grid item xs>
                                            <Typography gutterBottom variant="subtitle1" component="div">
                                             Años
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Item>
                    </Box>
                </Col>
                <Col>
                    <Box gridColumn="span 1">
                        <h3>Peso</h3>
                        <Item>
                            <Paper
                                sx={{
                                p: 2,
                                margin: 'auto',
                                // height: 500,
                                flexGrow: 1,
                                backgroundColor: (theme) =>
                                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                                }}
                            >
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm container>
                                        <Grid item xs container direction="column" spacing={2}>
                                        {/* <Img alt="complex" src="/static/images/grid/complex.jpg" /> */}
                                        </Grid>
                                        <Grid item xs>
                                            <Typography gutterBottom variant="subtitle1" component="div">
                                             Kg
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Item>
                    </Box>
                </Col>
                <Col>
                    <Box gridColumn="span 1">
                        <h3>Altura</h3>
                        <Item>
                            <Paper
                                sx={{
                                p: 2,
                                margin: 'auto',
                                // height: 500,
                                flexGrow: 1,
                                backgroundColor: (theme) =>
                                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                                }}
                            >
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm container>
                                        <Grid item xs container direction="column" spacing={2}>
                                        {/* <Img alt="complex" src="/static/images/grid/complex.jpg" /> */}
                                        </Grid>
                                        <Grid item xs>
                                            <Typography gutterBottom variant="subtitle1" component="div">
                                             cm
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Item>
                    </Box>
                </Col>
            </Row>
        </div>
        <div style={{ display: 'block', width: '100vw', padding: 30}}>
            <Row>
                <Col className='first'>
                    <Box gridColumn="span 1">
                        <h3>Act. Física</h3>
                        <Item>
                            <Paper
                                sx={{
                                p: 2,
                                margin: 'auto',
                                // height: 500,
                                flexGrow: 1,
                                backgroundColor: (theme) =>
                                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                                }}
                            >
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm container>
                                        <Grid item xs container direction="column" spacing={2}>
                                        {/* <Img alt="complex" src="/static/images/grid/complex.jpg" /> */}
                                        </Grid>
                                        <Grid item xs>
                                            <Typography gutterBottom variant="subtitle1" component="div">
                                            
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Item>
                    </Box>
                </Col>
                <Col>
                    <Box gridColumn="span 1">
                        <h3>Sexo</h3>
                        <Item>
                            <Paper
                                sx={{
                                p: 2,
                                margin: 'auto',
                                // height: 500,
                                flexGrow: 1,
                                backgroundColor: (theme) =>
                                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                                }}
                            >
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm container>
                                        <Grid item xs container direction="column" spacing={2}>
                                        {/* <Img alt="complex" src="/static/images/grid/complex.jpg" /> */}
                                        </Grid>
                                        <Grid item xs>
                                            <Typography gutterBottom variant="subtitle1" component="div">
                                            
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Item>
                    </Box>
                </Col>
            </Row>
        </div>
    </Box>
    </>);
}
