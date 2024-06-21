import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("mrgnwpdq");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <form  className="form-actual" onSubmit={handleSubmit}>
        <div className='form-position'>
      <label htmlFor="email">
        Email Address
      </label>
      <input 
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      </div>
      <div className='form-position'>
      <textarea
        id="message"
        name="message"
        placeholder='Ask a question / leave a feedback / add suggestion'
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      </div>
      <div  className='form-position form-button'>
      <button className="btn-contact" type="submit" disabled={state.submitting}>
        Submit
      </button>
      </div>
    </form>
  );
}

function App() {
    useGSAP(
        ()=> {
          gsap.from ('.form-text', {y:-150, duration:1, opacity:0, ease: 'power1.out' });
          gsap.from ('.inner', {y:-150, delay:0.5, duration: 1, stagger: 0.3, opacity:0,  ease: 'power1.out' })
        }
      )
  return (
    <div className='form-container'>
        <div className='form-text'>
            <p className='form-text-des'>Please, leave here your feedback or any information that you would like to see on our page in future</p>
        </div>
        <div className='form-inner'>
            <div className='inner'>
                <img className='form-image' src='https://images.unsplash.com/photo-1566592517755-2b3484e2e12c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='baby'/>
            </div>
            <div className='inner'>
                <ContactForm />
            </div>
        </div>
    </div>
  );
}

export default App;