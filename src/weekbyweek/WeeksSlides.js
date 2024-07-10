import PregWeeks from "./PregWeeks";
import { useNavigate, useParams } from "react-router";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

function WeeksSlides() {
    useGSAP(
        ()=> {
            gsap.from ('.gsap', {y:-200, duration:1, stagger: 0.3, opacity:0})
        }
    )
    const navigate = useNavigate();
    const {title} = useParams();

return(
    
    <div className="body-slides">
        {PregWeeks.filter((item)=> item.title===title).map((element,index)=>{
                return (
    <div className="containerSlides" key={index}>
        <div className="slides">
            
            <h1>{element.heading}</h1>
            
            <div className="slidesInner">
                <div className="slides-item item-one">
                    <figure className="snip0015 image-first gsap">
	                    <img src={element.fruit} alt="sample38"/>
	                    <figcaption>
		                    <p>{element.size}</p>
		                </figcaption>			
                    </figure>

                    <div className="slides-box gsap">
                        <div className="box topone"></div>
                        <div className="slidesText second">
                            <p>{element.development}</p>
                        </div>
                        <div className="box bottomone"></div>
                    </div>
                </div>

                <div className="slides-item  item-two">
                    <div className="slides-box box-two gsap">
                        <div className="box topone"></div>
                        <div className="slidesText second">
                            <p>{element.mom}</p>
                        </div>
                        <div className="box bottomone"></div>
                    </div>

                    <figure className="snip0015 image-second gsap">
	                    <img src={element.pictureus} alt="sample38"/>
	                    <figcaption>
		                    <p>{element.textus}</p>
	                	</figcaption>			
                    </figure>
                </div>
                <div className="container-goback">
                    <button  onClick={()=> navigate(-1)} className="btn-goback"><span>Go Back</span></button>
                </div>
            </div>
        </div>
    </div>  )  })        
}
</div>)

}

export default WeeksSlides;