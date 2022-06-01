import { Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import 'chart.piecelabel.js';

import Navbar2 from '../../Navbar2/Navbar';

import { Bar, Doughnut, Line, Pie } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { fontSize } from '@mui/system';
Chart.register(...registerables);


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Evolution = () => {

     //----------GRÁFICO LÍNEAS------------
    var days = [
        'Lunes',
        'Martes',
        'Miércoles',
        'Jueves',
        'Viernes',
        'Sábado',
        'Domingo'
    ];
    
    var dataLine={
        labels: days,
        datasets:[{
          label: 'Calorías Perdidas',
        //   data: Object.values(localStorage.getItem("cal_perd_sem").split(',')),
          data: [200,300,400,300,500],
          backgroundColor: '#528C83'
        }]
    }
    
    var opcionesLine={
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            max: 1000
          }
        },
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
      //-----------------------------------------------

      //----------GRÁFICO CIRCULAR------------

    var monthsCircle = [
        'Enero',
        'Marzo',
        'Abril'
    ];
        
    var colors2 = [
        '#528C83',
        '#DDDDE2',
        '#9DCFD9'
    ];
        
    var dataCircle={
        labels: monthsCircle,
        datasets:[{
            data: [12, 138, 300],
            backgroundColor: Object.values(colors2)
        }]
    }
        
    var opcionesCircle={
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            }
            /* title: {
                display: true,
                text: 'Chart.js Doughnut Chart'
            } */
        }
    }
  
        //------------------------------------

        //----------GRÁFICO DE BARRAS----------

  
    var months = [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre'
    ];

    var dataBar={
        labels:months,
        datasets:[{
            label:"Calorías perdidas hoy",
            backgroundColor: "#528C83",
            bordercolor: "black",
            borderWidth: 1,
            hoverBackgroundColor: "#528C8380",
            hoverBorderColor: "#FF0000",
            barThickness: 40,
            // data: Object.values(localStorage.getItem("cal_perd_mes").split(','))
            data : [200, 400, 500, 100]
        }]
    }

    var opcionesBar={
        maintainAspectRatio: false,
        responsive: true,
        categoryPercentage: 0.7, // here 
        barPercentage: 0.98,  // here
        scales: {
            y: {
                beginAtZero: true,
                steps: 10,
                stepValue: 5,
                max: 1000
            }
        }
    }

        //------------------------------------

    return(
        <>
        <Navbar2 />
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
                                                <Line data={dataLine} options={opcionesLine}/>
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
                                                <Pie data={dataCircle} height={"548px"} options={opcionesCircle}/>
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
                            <h3 className="mensual">Mensual</h3>
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
                                                <Bar data={dataBar} height={"213px"} options={opcionesBar}/>
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
    </>)
};

export default Evolution;