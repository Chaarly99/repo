import React, {useState} from "react";
// import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
// import ButtonBase from '@mui/material/ButtonBase';
import Navbar2 from '../../Navbar2/Navbar';
import { Bar, Doughnut, Line, Pie } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const Resumen = () => {
   //----------GRÁFICO DONNUT------------
  const [colors] = useState(['#528C83','#DDDDE2'])

  var dataDoughnut1={
    labels: ['Calorías Hoy', 'Objetivo'],
    datasets:[{
      data: [200, 600/* localStorage.getItem('cal_perd_now'), JSON.parse(localStorage.getItem('objetivo')) */],
      backgroundColor: colors,
      borderColor: '#c2bebe'
    }]
  }

 /*  var dataDoughnut2={
    labels: ['Calorías Hoy', 'Objetivo'],
    datasets:[{
      data: [localStorage.getItem('cal_perd'), JSON.parse(localStorage.getItem('objetivo'))],
      backgroundColor: colors
    }]
  }
 */
  var opcionesDoughnut={
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      }
      /* title: {
        display: true,
        text: 'Chart.js Doughnut Chart'
      } */
    }
  }

  //------------------------------------

    return(
    <>
    <Navbar2 />
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
              <Doughnut data={dataDoughnut1} options={opcionesDoughnut}/>
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
    </>)
};

export default Resumen;