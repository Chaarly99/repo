import "./Profile.css";
import video from '../../../media/video_inicio_Per4mance.mp4';


const Profile = () => {
    return(
        <div className="page-heading">
            <video autoPlay loop muted>
                <source src={video} type='video/mp4'/>
            </video>
        </div>
    )
};

export default Profile;

