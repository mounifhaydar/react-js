import React from 'react';
import CompareInput from './CompareInput';
import Message from './Message';

import './CompareMainContainer.css';

const leftS = "actual";
const rightS = "expected";

function CompareMainContainer(){
   

  return (
    <div className="CompareMainContainer">
        <div id="input-left" className="left">
            <CompareInput ></CompareInput>
        </div>
        <div id="indicator" className='indicator'>
        &lt;&lt;{leftS}
        <br></br>
        {rightS}&gt;&gt;
        </div>
        <div id="input-right" className="right">
            <CompareInput ></CompareInput>
        </div>
        
        <div className="CompareResult">
              <Message></Message>
        </div>
        
    </div>
  );
}

export default CompareMainContainer;