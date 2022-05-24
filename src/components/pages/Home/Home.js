import "./Home.css";
import video from '../../../media/video_inicio_Per4mance.mp4';


const Home = () => {
    return(
        <div className="home">
            <video autoPlay loop muted>
                <source src={video} type='video/mp4'/>
            </video>
        </div>
    )
};

export default Home;

