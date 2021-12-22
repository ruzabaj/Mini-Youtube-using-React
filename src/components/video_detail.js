import react from "react";
import { ValidationError } from "webpack";
const VideoDetail=(props) =>{
    if (!video){
        return(
            <div>Loading.........</div>
        );
    }
    const videoId=video.id.videoId;
    const url='https://www.youtube.com/embed/${videoId}';
    
    return(
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className='embed-responsive-item'></iframe>
            </div>
            <div className='details'>
            {/* for the title  */}
                <div>{vide.snippet.title}</div>   
            {/* for the description  */}
                <div>{vide.snippet.description}</div>
            </div>
        </div>
    );
};
export default VideoDetail;
