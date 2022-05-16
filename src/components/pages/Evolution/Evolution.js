import { styled } from '@mui/material/styles';
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

const Evolucion = () => {
    return(
        <Box sx={{ width: 1, padding: 2 }}>
            <Box display="grid" gap={2}>
                <Box gridColumn="span 4">
                    <Item>xs=4
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
                                            Informe Semanal
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Item>
                </Box>
            <Box gridColumn="span 4">
                <Item>xs=4
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
                                        Mejores Días
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </Item>
            </Box>
            <Box gridColumn="span 8">
                <Item>xs=8
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
                                            Mensual
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

export default Evolucion;