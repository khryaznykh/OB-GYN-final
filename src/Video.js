import videoToPlay from "./video/video-pregnant.mp4";

function Video() {
    
    return  <div>
        <video className="videoToPlay"  autoPlay={true} muted={true} loop ={true} >
            <source src={videoToPlay}  type='video/mp4'/>
        </video> 
    </div>
}
export default Video;