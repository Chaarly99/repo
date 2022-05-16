import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const About = () => {
  return(
    <div className="container">
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
                    Sobre nosotros
                    <Typography variant="body2" color="text.secondary">
                    Per4mance, nace como una app híbrida, desarrollada mediante el framework de programación web de JavaScript (Lenguaje de programación interpretado, es decir, que ejecuta las instrucciones directamente sin necesidad de compilación en lenguaje máquina), React, que junto a los lenguajes de programación HTML (Lenguaje de Marcas de Hipertexto) y JavaScript nos permite vincular un SGBD (Sistema Gestor de Bases de Datos) no relacional llamado MongoDB, para estructurar los datos de los usuarios en cuanto datos personales se refiere e interactuar con la herramienta que podremos acceder mediante un servidor alojado en un hosting.
                    La aplicación sirve de apoyo para aquellas personas cuya prioridad es mantener una buena salud teniendo en cuenta sus progresos, en cuanto a objetivos, de la vida diaria como son la pérdida o ganancia de calorías, la cantidad de agua ingerida o la cantidad de horas de sueño realizadas.
                    Se podrá disfrutar tanto en dispositivos de alta y baja resolución para deleite del usuario lo que permite a la aplicación una disponibilidad completa en cualquier momento. 
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
    </div>
   
  )
};

export default About;