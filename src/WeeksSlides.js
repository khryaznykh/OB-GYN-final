import { useState } from "react";
import PregWeeks from "./PregWeeks";
import SweetAlert from "./SweetAlert";
import { useNavigate, useParams } from "react-router";

function WeeksSlides() {
    const navigate = useNavigate();
    const {title} = useParams();

   


return(
    <div>
         {PregWeeks.filter((item)=> item.title===title).map((element,index)=>{
                return (
 
    <div className="containerSlides" key={index}>
        <div className="slides">
            
            <h1>{element.heading}</h1>
            
            <div className="slidesInner">
                <div className="slides-item">
                    {/* <figure class="snip1206 image-first">
                        <img src={element.fruit} alt="sample74"/>
                        <figcaption>
                            <p>{element.size}</p>
                        </figcaption>
                    </figure> */}
                    <figure className="snip0015 image-first">
	<img src={element.fruit} alt="sample38"/>
	<figcaption>
		<p>{element.size}</p>
		
	</figcaption>			
</figure>
                    <div className="slides-box">
                        <div className="box topone"></div>
                        <div className="slidesText second">
                            <p>{element.development}</p>
                        </div>
                        <div className="box bottomone"></div>
                    </div>
                </div>

                <div className="slides-item">
                <div className="slides-box">
                        <div className="box topone"></div>
                        <div className="slidesText second">
                            <p>{element.mom}</p>
                        </div>
                        <div className="box bottomone"></div>
                    </div>

                    <figure className="snip0015 image-second">
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