import { Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from 'react-bootstrap/Button';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Evolution = () => {
    return(
        <Box>
            <div style={{ display: 'block', width: '100vw', padding: 30}}>
                <Row>
                    <Col className='first'>
                        <Box>
                            <h3>Informe Semanal</h3>
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
                    <Col className='second'>
                        <Box>
                            <h3>Mejores Días</h3>
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
                </Row>
                <Row>
                    <Col>
                        <Box>
                            <h3>Mensual</h3>
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
                </Row>
            </div>
        </Box>
    )
};

export default Evolution;