import { Link } from "react-router-dom";
import {motion} from 'framer-motion';
import "../style/StylesWeeks.css";
import { useState } from "react";
import PregWeeks from "../data/PregWeeks";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

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
    useGSAP(
        ()=> {
            const tl = gsap.timeline({delay:0, stagger: 0.5});
                tl.to(".colortext", {duration: 2, text:" major information"});
                tl.to(".colortext-three", {duration: 1.5, text:" week by week"})
        })

    return (
        <div className="weeks-container">
            <div className="weeks-text-main" >
                <h1>We've tried to collect<span className="colortext"> </span> on pregnancy development <br/> <span className="colortext-three"></span> </h1>
                <p>Just click on the week that you want to check and enjoy</p>
            </div>
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
                    <Link className="link" to={`/WeeksSlides/${element.title}`}>
                    <motion.div className="weekCard" key={id} 
                    initial={{opacity:0, y:30}} 
                    whileInView={{opacity:1, y:0, transition:{ease: "easeOut", duration:0.5}}}
                    viewport={{once: false, amount: 0.3}}>
                        <img className="weekCardImage" src={image} alt="embryo" width={250}/>
                        <p className="weekCardText bold">{heading}</p>
                        <p className="weekCardText">{message}</p>
                    </motion.div>
                    </Link>
                    )
            })}
            </div>
        </div>
    )
}
export default WeekByWeek;