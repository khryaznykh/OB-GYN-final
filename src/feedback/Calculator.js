import React, { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import InputFeedback from "./InputFeedback";
import { v4 as uuidv4 } from 'uuid';
import FeedbackShow from "./FeedbackShow";
import './Feedback.css';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";

const Calculator = () => {
    useGSAP(
        ()=> {
        gsap.from ('.big-one', {y:-100, opacity:0, ease: "power1.inOut",duration:1.2})
        gsap.from ('.big-two', {y:-150, opacity:0, ease: "power1.inOut",duration:1.4, delay:0.2})
        gsap.from ('.big-three', {y:-200, opacity:0, ease: "power1.inOut",duration:1.6, delay: 0.4})
        gsap.from ('.big-four', {y:-250, opacity:0, ease: "power1.inOut",duration:1.8, delay: 0.6})    
    }
    )
    const [feedbackBankNew, setFeedbackBankNew] = useState(() => {
        const savedFeedback = localStorage.getItem('feedbackBankNew');
        return savedFeedback ? JSON.parse(savedFeedback) : [];
    });

    const [newFeedback, setNewFeedback] = useState({
        name: '',
        text: '',
        email: ''
    });

    useEffect(() => {
        localStorage.setItem('feedbackBankNew', JSON.stringify(feedbackBankNew));
    }, [feedbackBankNew]);

    const addSubmitFeedback = () => {
        const addFeedback = {
            id: uuidv4(),
            text: newFeedback.text,
            name: newFeedback.name,
            email: newFeedback.email,
        }
        setFeedbackBankNew([addFeedback, ...feedbackBankNew])
        setNewFeedback({
            name: '',
            text: '',
            email: ''
        });
    }

    return (
        <div className="calculatormain-container">
            <div className="box-angled"></div>
            <div className="circle-background-container">
                <div className="circle-background"></div>
            </div>
            
            <div className="feedback-text-container">
                <p className="big-one">Do you want to leave your <span className="colortext">feedback </span>or <span className="colortext-two">question?</span></p>
                <p className="big-two">Feel free to do it<span className="colortext-four"> here</span></p>
                <p className="big-three">Your opinion matters and it will appear on this webpage as soon as you submit it</p>
                <p className="big-four">We will reach out to you with <span className="colortext-three">any concerns or questions.</span> Help us to make our website better</p>
            </div>
        
            <div className="image-input-container">
                <div className="feedback-image-container">
                    <img className="feedback-image" src="https://images.unsplash.com/photo-1537673156864-5d2c72de7824?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="feedback" width={420}/>
                </div>
                <div className="input-container">
                    <InputFeedback
                        newFeedback={newFeedback}
                        setNewFeedback={setNewFeedback}
                        addSubmitFeedback={addSubmitFeedback}
                    />
                </div>
            </div>
            <div className="feedbackshow-container">
                <FeedbackShow feedbackBankNew={feedbackBankNew} />
            </div>
        </div>
    );
}

export default Calculator;






