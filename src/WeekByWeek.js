import { useState } from "react";
import PregWeeks from "./PregWeeks";
import WeeksSlides from "./WeeksSlides";
import { Link } from "react-router-dom";

function WeekByWeek () {
    const weeks = PregWeeks;
    const [sorted, setSorted] = useState(weeks);
   
 

    const filterFirst = (id) => {
        let newFirst = weeks.filter(item => item.id <14)
        setSorted(newFirst)
    };
    const filterSecond = (id) => {
        let newSecond = weeks.filter(item => item.id < 28 && item.id >13)
        setSorted(newSecond)
    };
        
    
    const filterThird = (id) => {
        let newThird = weeks.filter(item => item.id > 27);
        setSorted(newThird)
    }
    const filterAll = (id) => {
        setSorted(weeks)
    }

  
    

    return (
        <div>
            <div className="buttons">
                <button className="buttonWeek" onClick={()=>filterFirst(weeks.id)}>First Trimester</button>
                <button className="buttonWeek" onClick={()=>filterSecond(weeks.id)}>Second Trimester</button>
                <button className="buttonWeek" onClick={()=>filterThird(weeks.id)}>Third Trimester</button>
                <button className="buttonWeek"  onClick={()=>filterAll(weeks.id)}>Show all weeks</button>
            </div>
           

            <div className="weekCardPositioning sibling-fade">
            {sorted.map((element)=>{
                const {id, image, heading, message} = element;
                return(

                    <Link className="link" to={`/WeekByWeek/${element.title}`}>
                    <div className="weekCard" key={id}  >
                        <img className="weekCardImage" src={image} alt="embryo" width={250}/>
                        <p className="weekCardText bold">{heading}</p>
                        <p className="weekCardText">{message}</p>
                    </div>
                    </Link>
                    )
            })}
            </div>
        </div>
    )
}
export default WeekByWeek;