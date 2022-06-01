import "./Home.css";
import video from '../../../media/video_inicio_Per4mance.mp4';
import Navbar from '../../Navbar/Navbar';

const Home = () => {
    return(
        <>
        <Navbar />
        <div className="home">
            <video autoPlay loop muted>
                <source src={video} type='video/mp4'/>
            </video>
        </div>
        </>
    )
};

export default Home;

