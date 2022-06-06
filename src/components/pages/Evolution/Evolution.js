import React, {useState, useEffect} from "react";
import "./Evolution.css"
import { Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import 'chart.piecelabel.js';

import Navbar2 from '../../Navbar2/Navbar';

import { Bar, Line, Pie } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
Chart.register(...registerables);

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Evolution = () => {

    const [cal_perd_sem] = useState(JSON.parse(localStorage.getItem('user'))[0].cal_perd_sem);
    const [cal_perd_sem_set] = useState(new Set(JSON.parse(localStorage.getItem('user'))[0].cal_perd_sem));
    const [cal_perd_sem_arr] = useState(Array.from(cal_perd_sem_set));
    const [cal_perd_mes] = useState(JSON.parse(localStorage.getItem('user'))[0].cal_perd_mes);

    const [topDays, getTopDays] = useState([]);
    const [topDaysNames, getTopDaysNames] = useState([]);
    const [topDaysValues, getTopDaysValues] = useState([]);

    useEffect(() => {
        getTopDaysValues(getBestDaysValue(cal_perd_sem));
        getTopDays(getBestDaysPos(cal_perd_sem));
        getTopDaysNames(dayNameOfTops(topDays));
        // code to run after render goes here
      }, []); //[] run once

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
          data: cal_perd_sem_arr,
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
        },
        plugins: [ChartDataLabels]
    }
      //-----------------------------------------------

      //----------GRÁFICO CIRCULAR---------------------

    function getBestDaysPos(myArray) {
        return myArray.indexOf(getBestDaysValue);
    }

    function getBestDaysValue(myArray) {
        return myArray.sort((a, b) => b - a).slice(0, 3);
    }

    //FALTA RECOGER EL DIA SEGÚN SWITCH
    function dayNameOfTops(myArray) {
        let names = [];
        for(let i=0; i<= myArray.length; i++){
            switch (myArray[i]) {
                case 1:
                    names.push("Lunes");
                    break;
                case 2:
                    names.push("Martes");
                    break;
                case 3:
                    names.push("Miércoles");
                    break;
                case 4:
                    names.push("Jueves");
                    break;
                case 5:
                    names.push("Viernes");
                    break;
                case 6:
                    names.push("Sabado");
                    break;
                case 7:
                    names.push("Domingo");
                    break;
                default:
                    break;
            }
        }
        return names;
    }

    /* var monthsCircle = [
        'Enero',
        'Marzo',
        'Abril'
    ]; */
        
    var colors2 = [
        '#528C83',
        '#DDDDE2',
        '#9DCFD9'
    ];
        
    var dataCircle={
        labels: Object.values(topDaysNames),
        datasets:[{
            data: topDaysValues,
            backgroundColor: Object.values(colors2)
        }]
    }
        
    var opcionesCircle={
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            },
            datalabels:{
                align: 'center',
                formatter: (value, context) => {
                    const datapoints = context.chart.data.datasets[0].data;
                    function totalSum(total, datapoint){
                        return total + datapoint;
                    }
                    const totalValue = datapoints.redce(totalSum, 0);
                    const percentageValue = (value / totalValue * 100).toFixed(1);
                    const display = [`${topDaysNames}`, `${percentageValue}%`]
                    return display;
                }
            }
        },
        plugins: [ChartDataLabels],
    }
  
        //-------------------------------------------

        //----------GRÁFICO DE BARRAS----------------

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
            data : cal_perd_mes
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
        },
        plugins: [ChartDataLabels],
    }

        //------------------------------------

    return(
        <>
        <Navbar2 />
        <Box>
            <div style={{ display: 'block', padding: 30}}>
                <Row>
                    <Col>
                        <Box className='first'>
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
                                            <Grid item xs container direction="column" spacing={2} marginLeft={'0'}>
                                                <Line data={dataLine} options={opcionesLine} height={"140px"}/>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Item>
                        </Box>
                    </Col>
                    <Col>
                        <Box className='second'>
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
                                            <Grid item xs container direction="column" spacing={2} marginLeft={'0'}>
                                                <Pie data={dataCircle} plugins={[ChartDataLabels]} height={"400px"} options={opcionesCircle}/>
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
                                            <Grid item xs container direction="column" spacing={2} marginLeft={'0'}>
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