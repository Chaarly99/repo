// import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
// import ButtonBase from '@mui/material/ButtonBase';

const Resumen = () => {
    return(
        <Paper
        sx={{
          p: 2,
          margin: 'auto',
          maxWidth: 1000,
          height: 1000,
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
                    Media Semanal
                    <Typography variant="body2" color="text.secondary">
                        ...
                    </Typography>
                </Typography>
                <Typography gutterBottom variant="subtitle1" component="div">
                    Objetivo
                    <Typography variant="body2" color="text.secondary">
                        ...
                    </Typography>
                </Typography>
                <Typography gutterBottom variant="subtitle1" component="div">
                    Conseguido: 
                    <Typography variant="body2" color="text.secondary">
                        ...
                    </Typography>
                </Typography>
              </Grid>
              {/* <Grid item>
                <Typography sx={{ cursor: 'pointer' }} variant="body2">
                  Remove
                </Typography>
              </Grid> */}
          </Grid>
        </Grid>
      </Paper>
    )
};

export default Resumen;