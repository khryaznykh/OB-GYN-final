import { Link } from "react-router-dom";
import '../style/StylesWhatToExpect.css';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";

function WhatToExpect () {
    useGSAP(
        ()=> {
            gsap.from ('.gsap-text', { y:-200, duration:1,stagger:0.3, opacity:0})
        }
    )

    return (
        <div className="what-to-expect">
            <div className="what-to-image">
                <img src="https://images.unsplash.com/photo-1511948374796-056e8f289f34?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={500} alt="preg_image"/>
            </div>
            <div className="header">
                <h2 className="gsap-text">Congratulation to the expectant mom!</h2>
                <p className="gsap-text">Healthy pregnancy is not only about eating healthy, exercising, having enough sleep and less stress.</p>
                <p className="gsap-text"> It is also about sticking with the busy routine of OB/GYN visits, ultrasound appointments and bloodwork tests.</p>
            </div>

            <div className="circles-three sibling-fade">
                <Link className="link link-circle" to="/Obgyn">
                    <div className="circle">
                        <p>Prenatal visits with your OB/GYN provider</p>
                    </div>
                </Link>

                <Link className="link link-circle" to="/Genetics">
                    <div className="circle">
                        <p>Genetic bloodwork labs</p>
                    </div>
                </Link>

                <Link className="link link-circle" to="/Blood">
                    <div className="circle">
                        <p>Routine bloodwork</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default WhatToExpect;