import React from 'react';
import Countdown from './Countdown';

const Welcome = () => {

    const h1={
        color: `rgb(240, 16, 184)`,    
        fontSize: `34px`,   
        fontFamily:`Arial, sans-serif`,
        fontWeight: `bold`,
        fontStyle: `oblique`,
    }
    const h2={
      color: `rgb(240, 16, 184)`, 
      paddingLeft:`10%`,
      fontSize: `24px`,   
      fontFamily:`Arial, sans-serif`,
      fontWeight: `bold`,
      fontStyle: `oblique`,
    }
    const Countdownstyle={
        fontSize: `40px`,   
        paddingLeft:`20%`,
        fontWeight: `bold`,
        color :`#1044f0`, 
    }
    const text={
        paddingLeft:`16%`,
    }
    const leftText={
        fontSize: `40px`,   
        paddingLeft:`50%`,
        fontWeight: `bold`,
        color :`hwb(51 47% 5%)`,
    }

    const happy={
        paddingTop:`20%`,
        fontSize: `150%`, 
        fontWeight: `bold`,
    }
    const msg={
        fontSize: `150%`, 
    }
    return (
        <div>
            <div>
              <div style={h1}> Ganesh Chaturthi </div>
              <div style={h2}> on the way </div>
              <div style={Countdownstyle}>
              <Countdown />
              </div>
              <label style={text}> days : hours : minutes : seconds</label>
              <div style={leftText}>To Left</div>               
            </div>
              <div style={happy}>
                <label > 25<sup>th</sup>  వినాయక చవితి శుభాకాంక్షలు</label>
            </div>
            <div style={msg}>we are conducting a lot of games. Interested candidates to register </div>
        </div>
    );
}

export default Welcome;
