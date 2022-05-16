import "./Profile.css";

import { styled } from '@mui/material/styles';
import Button from 'react-bootstrap/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Profile = () => {
    return(
        <Box sx={{ width: 1, padding: 2 }}>
            <h1>Perfil de cparro</h1>
            <Button variant="warning">Borrar Perfil</Button>{' '}
            <Button variant="success">Cerrar Sesión</Button>{' '}
            <Box display="grid" gap={2}>
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
                <Box gridColumn="span 2">
                    <h3>Nivel de Actividad Física</h3>
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
                <Box gridColumn="span 2">
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
            </Box>
        </Box>
    )
};

export default Profile;
