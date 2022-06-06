import { Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import { styled } from '@mui/material/styles';
import './Tips.css'
import Navbar2 from '../../Navbar2/Navbar';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import food1 from '../../../media/fruta.webp';
import food2 from '../../../media/verdura.webp';
import food3 from '../../../media/carnes.webp';
import food4 from '../../../media/pescado.webp';
import { color } from '@mui/system';



const Tips = () => {
  return(
    <>
    <Navbar2 />
    <div classname="containerd" style={{ display: 'block', width: '100vw', padding: 30, background: "#fff" }}>
      <h4>Consejos del día</h4>
      <Row>
        <Col className='firstT'>
          <p>Para tener una <b>Dieta Saludable</b> se debe conocer cual es el peso ideal que queremos mantener teniendo en cuenta nuestro <b>(IMC)</b>.
                  Debemos tener un equilibrio entre las calorías que tomamos y las que gastamos, ya que, de lo contrario aumentaremos de peso y el sobrepeso no es bueno para la salud.
                  Para ello procura seguir los siguientes tips para conseguir una dieta saludable:
          </p>
          <ul>
            <li><b>1.</b> Evitar las grasas saturadas y matener el aceite de oliva como grasa principal, este último nos aporta vitaminas y antioxidantes.</li>

            <li><b>2.</b> Tomar lácteos desnatados para aportar calcio y evitar las grasas y colesterol de la leche entera.</li>

            <li><b>3.</b> Comer frutas y verduras, que nos aportan antioxidantes, nutrientes y vitaminas que nos protegen de enfermedades. Ensalada para las comidas, una pieza de fruta para el almuerzo y postres, alcanzando 5 raciones de fruta y verdura al dia recomendadas.</li>

            <li><b>4.</b> Cereales integrales y legumbres, para aportar vitaminas, minerales e hidratos de carbono.</li>
            
            <li><b>5.</b> Carne, a ser posible de ave y pescado, aunque sin dejar de lado las carnes rojas ya que nos aporta proteínas y hierro, fósforo y zinc y vitaminas B. El pescado rico en omega-3, como los huevos enteros,  para el desarrollo cerebral.</li>

            <li><b>6.</b> Evitar a ser posible sal y azúcar. Toda cantidad en exceso es mala pero no se debe dejar por completo. </li>

            <li><b>7.</b> Realizar ejercicio frecuente. Nos beneficia física y mentalmente para el dia a dia. Gastamos calorías y previene enfermedades. Aprox. 30 minutos de ejercicio aeróbico al dia.</li>
          </ul>
        </Col>
        <Col className="secondT">
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
              <img className='food' alt="food1" src={food1} />
            </Grid>
            <Grid item xs={6}>
              <img className='food' alt="food2" src={food2} />
            </Grid>
            <Grid item xs={6}>
              <img className='food' alt="food3" src={food3} />
            </Grid>
            <Grid item xs={6}>
              <img className='food' alt="food4" src={food4} />
            </Grid>
          </Grid>
      </Col>
      </Row>
    </div>
</>)
};


export default Tips;