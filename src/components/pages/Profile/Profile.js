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

    const [name] = useState(JSON.parse(localStorage.getItem('user'))[0].name);
    const [age] = useState(JSON.parse(localStorage.getItem('user'))[0].age);
    const [weight] = useState(JSON.parse(localStorage.getItem('user'))[0].weight);
    const [height] = useState(JSON.parse(localStorage.getItem('user'))[0].height);
    const [activity] = useState(JSON.parse(localStorage.getItem('user'))[0].activity);
    const [act, setAct] = useState("")
    const [sexo] = useState(JSON.parse(localStorage.getItem('user'))[0].sexo);

    useEffect(() => {
        setActivity(activity);
        // code to run after render goes here
      }, []); //[] run once
    
    const navigate = useNavigate();

    const closeSession = () => {
        localStorage.clear();
        navigate('/'); 
    }

    const setActivity = (act) => {
        switch (act) {
            case 1:
                setAct("No hago ejercicio diariamente")
                break;
            case 2:
                setAct("Hago ejercicio de vez en cuando")
                break;
            case 3:
                setAct("Hago ejercicio varias veces a la semana")
                break;
            case 4:
                setAct("Hago ejercicio todos los dias")
                break;
            default:
                break;
        }
    }

    const deleteUser = () => {
        var id = {
            id: JSON.parse(localStorage.getItem('user'))[0]._id
        };
        UserDataService.delete(id)
        .then(() => {
            alert("El usuario ha sido borrado correctamente.")
            localStorage.clear();
            navigate('/'); 
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
                    <h1>Perfil de {name}</h1>
                </Col>
                <Col className="second">
                    <Button className="bt1" onClick={closeSession}>Cerrar Sesión</Button>{' '}
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
                                        <Grid item xs>
                                            <Typography gutterBottom variant="h4" component="div">
                                             {age} Años
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
                                        <Grid item xs>
                                            <Typography gutterBottom variant="h4" component="div">
                                            {weight} Kg
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
                                        <Grid item xs>
                                            <Typography gutterBottom variant="h4" component="div">
                                            {height} cm
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
                                        <Grid item xs>
                                            <Typography gutterBottom variant="h4" component="div">
                                            {act}
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
                                        <Grid item xs>
                                            <Typography gutterBottom variant="h4" component="div">
                                            {sexo}
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
