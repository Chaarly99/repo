import "./Profile.css";

import { styled } from '@mui/material/styles';
import Button from 'react-bootstrap/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Profile = () => {
    return(
        <Box>
            <div style={{ display: 'block', width: '100vw', padding: 30}}>
                <Row>
                    <Col className='first'>
                        <h1>Perfil de cparro</h1>
                    </Col>
                    <Col className="second">
                        <Button className="bt1">Cerrar Sesión</Button>{' '}
                        <Button className="bt2">Borrar Perfil</Button>{' '}
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
                                                    ...
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
                                                    M
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
    )
};

export default Profile;
