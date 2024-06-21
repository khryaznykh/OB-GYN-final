import { Link } from "react-router-dom";

function WhatToExpect () {
    return (
        <div className="what-to-expect">
            <div className="what-to-image">
                <img src="https://images.unsplash.com/photo-1511948374796-056e8f289f34?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={500} alt="preg_image"/>
            </div>
            <div className="header">
                <h2>Congratulation to the expectant mom!</h2>
                <p>Healthy pregnancy is not only about eating healthy and having less stress.</p>
                <p> It is about sticking with the busy routine of OB/GYN visits, ultrasound imaging and bloodwork.</p>
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