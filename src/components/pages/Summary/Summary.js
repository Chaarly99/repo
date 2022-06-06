import React, {useState, useEffect} from "react";
// import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
// import ButtonBase from '@mui/material/ButtonBase';
import Navbar2 from '../../Navbar2/Navbar';
import { Doughnut } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const Resumen = () => {

  const [colors] = useState(['#528C83','#DDDDE2'])
  const [cal_perd] = useState(JSON.parse(localStorage.getItem('user'))[0].cal_perd);
  const [objetivo] = useState(JSON.parse(localStorage.getItem('user'))[0].objetivo);
  const [cal_perd_sem] = useState(JSON.parse(localStorage.getItem('user'))[0].cal_perd_sem);
  const [media_sem, setMedia] = useState(0); 
  const [conseguido, setConseguido] = useState("")
  const [phrase, setPhrase] = useState("")

  useEffect(() => {
    isAchieved();
    setMedia(mediaSem());
    // code to run after render goes here
  }, []); //[] run once


  //----------GRÁFICO DONNUT------------
  
  var dataDoughnut1={
    labels: ['Calorías Hoy', 'Objetivo'],
    datasets:[{
      data: [cal_perd, objetivo],
      backgroundColor: colors,
      borderColor: '#c2bebe'
    }]
  }

  var options={
    responsive: true,
    maintainAspectRatio: false,
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

  const mediaSem = () => {
    let suma = 0;
    let res = 0;
    
    for(let i=0; i<cal_perd_sem.length; i++){
      suma += cal_perd_sem[i]
    }
    res = suma / cal_perd_sem.length;

    return parseInt(res);
  }

  const isAchieved = () => {
    if (cal_perd == objetivo) {
      setConseguido("Si")
      setPhrase("Enhorabuena has conseguido tu objetivo de hoy! Buen trabajo.")
    } else {
      setConseguido("No")
      setPhrase("Siga esforzándose! Seguro que consigue alcanzar el objetivo!")
    }
  }

    return(
    <>
    <Navbar2 />
        <Paper
        sx={{
          p: 2,
          margin: 'auto',
          height: '100vh',
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2} margin={'0.5em'} height={'60vh'}>
              <Doughnut data={dataDoughnut1}  options={options}/>
            </Grid>
            <Grid className="side2" item xs container direction="column" spacing={2} margin={'0.5em'}>
              <div class="table-responsive">
                <table class="table">
                <thead>
                    <tr>
                      <th scope="col"></th>
                      <th scope="col"> <Typography gutterBottom variant="h5" component="div">Media Semanal</Typography></th>
                      <th scope="col"><Typography gutterBottom variant="h5" component="div">Objetivo</Typography></th>
                      <th scope="col"><Typography gutterBottom variant="h5" component="div">Conseguido</Typography></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row"></th>
                      <td><Typography variant="h6" color="text.secondary">{media_sem} cal.</Typography></td>
                      <td><Typography variant="h6" color="text.secondary">{objetivo}</Typography></td>
                      <td><Typography variant="h6" color="text.secondary">{conseguido}</Typography></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h4 className="phrase">{phrase}</h4>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>)
};

export default Resumen;