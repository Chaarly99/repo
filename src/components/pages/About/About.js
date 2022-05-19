/* import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
 */
import "./About.css"
import Img1 from "./img1"
import TextBox from "./TextBox"
import {ParallaxProvider} from "react-scroll-parallax";

import Par1 from "../../../media/parallax1.jpg"

const About = () => {
  
  return(
    <ParallaxProvider>
      <Img1 imgsrc={Par1} height="500px" opacity=".5">
        <h1 style={{position: 'absolute', color: '#000', backgroundColor: '#dddde2', padding: '.5em'}}>Sobre Nosotros</h1>
      </Img1>
      <TextBox />
    </ParallaxProvider>
  )
}

export default About;