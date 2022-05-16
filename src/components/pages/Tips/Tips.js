import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const Consejos = () => {
    return(
        <Paper
        sx={{
          p: 2,
          margin: 'auto',
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                    Consejos del día
                    <Typography variant="body2" color="text.secondary">
                        La dieta saludable se basa en....
                    </Typography>
                </Typography>
            </Grid>
            <Grid item xs container direction="column" spacing={2}>
              {/* <Img alt="complex" src="/static/images/grid/complex.jpg" /> */}
              {/* <Img alt="complex" src="/static/images/grid/complex.jpg" /> */}
              {/* <Img alt="complex" src="/static/images/grid/complex.jpg" /> */}
              {/* <Img alt="complex" src="/static/images/grid/complex.jpg" /> */}
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    )
};

export default Consejos;