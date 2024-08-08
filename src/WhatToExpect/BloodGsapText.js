import {useLayoutEffect, useRef } from "react";
import {gsap} from "gsap";
import SplitText from "gsap-trial/SplitText" ;
import '../style/StylesWhatToExpect.css';
gsap.registerPlugin(SplitText);

function BloodGsapText () {
    const component = useRef();
    useLayoutEffect(() => {
    
        // a gsap.context() lets us use scoped selector text and makes cleanup way easier. See https://greensock.com/docs/v3/GSAP/gsap.context()
        let ctx = gsap.context(() => {
    
          let split = SplitText.create("p", {type:"chars"});
          
          gsap.from(split.chars, { // <- selector text, scoped to this component!
            opacity: 0,
            y: 10,
            ease: "back",
            duration: 0.3,
            stagger: 0.01
          });
          
          return () => split.revert(); // context cleanup
          
        }, component); // <- scopes all selector text inside the context to this component (optional, default is document)
        
        return () => ctx.revert(); // useLayoutEffect cleanup
      }, []);

      return(
        <div className="heading-text" ref={component} >
                <p><span className="colortext">Pregnancy bloodwork </span>is a group of blood tests<br/> that are done during pregnancy to check<br/> for diseases, infections, and hormones.<br/> It can confirm pregnancy, assess<br/><span className="colortext-two">the health of the mother and the baby,</span> <br/>and guide treatments.<br/>Some of these tests are done with <br/>a<span className="colortext-three"> blood sample.</span><br/> Others use a urine sample or a sample of fluid taken<br/> from your vagina, cervix, or rectum.<br/> These tests can help find conditions that may increase <br/>the risk of complications for you and your fetus.<br/> Many problems found by these tests<br/> can be treated during pregnancy.</p>
        </div>

      )
      }
      export default BloodGsapText;