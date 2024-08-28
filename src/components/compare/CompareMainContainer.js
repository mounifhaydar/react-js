import React from 'react';
import CompareInput from './CompareInput';
import Message from './Message';
import CompareResult from './CompareResult';

import './CompareMainContainer.css';
import ActionBar from '../ActionBar';
import '../ActionBar.css';

const leftS = "actual";
const rightS = "expected";

function CompareMainContainer(){
   

  return (
    <div className="CompareMainContainer">
      <div>
        <div id="input-left" className="left input-left">
            <CompareInput ></CompareInput>
        </div>
        <div id="indicator" className='indicator'>
        &lt;&lt;{leftS}
        <br></br>
        {rightS}&gt;&gt;
        </div>
        <div id="input-right" className="right  input-right">
            <CompareInput ></CompareInput>
        </div>
        </div>
        <div id="actionBar" className="actionBar">
          <ActionBar></ActionBar>
        </div>
        <div className="compareResult">
              <Message type="JSON"></Message>
              <div>
                <CompareResult></CompareResult>
              </div>
        </div>
        
    </div>
  );
}

export default CompareMainContainer;