import {useLayoutEffect, useRef } from "react";
import {gsap} from "gsap";
import SplitText from "gsap-trial/SplitText" ;
gsap.registerPlugin(SplitText);

function GsapText () {
    const component = useRef();
    useLayoutEffect(() => {
    
        // a gsap.context() lets us use scoped selector text and makes cleanup way easier. See https://greensock.com/docs/v3/GSAP/gsap.context()
        let ctx = gsap.context(() => {
    
          let split = SplitText.create("h1", {type:"chars"});
          
          gsap.from(split.chars, { // <- selector text, scoped to this component!
            opacity: 0,
            y: 20,
            ease: "back",
            duration: 0.5,
            stagger: 0.03
          });
          
          return () => split.revert(); // context cleanup
          
        }, component); // <- scopes all selector text inside the context to this component (optional, default is document)
        
        return () => ctx.revert(); // useLayoutEffect cleanup
      }, []);
      
      return(
        <div className="weeks-text-main" ref={component} >
        <h1>We've tried to collect<span className="colortext">major information </span> on pregnancy development <br/> <span className="colortext-three">week by week</span> </h1>
        <p>Just click on the week that you want to check and enjoy</p>
    </div>

      )
      }
      export default GsapText;