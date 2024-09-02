import React, { useState ,useEffect} from 'react';
import CompareInput from './CompareInput';
import Message from './Message';
import CompareResult from './CompareResult';

import './CompareMainContainer.css';
import ActionBar from '../ActionBar';
import '../ActionBar.css';


const leftS = "actual";
const rightS = "expected";

function CompareMainContainer(){

  
  const [leftInput, setLeftInput] = useState(null); // Use state for dynamic values
  const [rightInput, setRightInput] = useState(null); // Use state for dynamic values

  const [compareOut, setCompareOut]=useState(null);

useEffect(() => {
  fetch(
    'https://api.github.com/users/mounifhaydar'
  ).then(response => response.json()).then((data) => {
    setCompareOut(JSON.stringify(data, null, 2)); // Correctly setting the state with fetched data
  });
},[]);

fetch(
  'https://api.github.com/users/fanvsfan'
).then(response => response.json()).then((data) => {
  setLeftInput(JSON.stringify(data, null, 2)); // Correctly setting the state with fetched data
});

//left on change
useEffect(() => {
  if (leftInput) {
    console.log(leftInput);
    //setLeftInput(JSON.stringify(leftInput, null, 2)); // Update state properly
  }
}, [leftInput]); // Dependency on leftInput to trigger the effect

//right on change
useEffect(() => {
  if (rightInput) {
    console.log(rightInput);
    //setRightInput(JSON.stringify(rightInput, null, 2)); // Update state properly
  }
}, [rightInput]); // Dependency on setRightInput to trigger the effect

/*
if(compareOut){
  console.log(compareOut);
  leftInput=JSON.stringify(compareOut, null, 2);
}
*/

  return (
    <div className="CompareMainContainer">
      <div>
        <div id="input-left" className="left input-left">
            <CompareInput value={leftInput}></CompareInput>
        </div>
        <div id="indicator" className='indicator'>
        &lt;&lt;{leftS}
        <br></br>
        {rightS}&gt;&gt;
        </div>
        <div id="input-right" className="right  input-right">
            <CompareInput value={rightInput}></CompareInput>
        </div>
        </div>
        <div id="actionBar" className="actionBar">
          <ActionBar></ActionBar>
        </div>
        <div className="compareResult">
              <Message type="JSON"></Message>
              <div>
                <CompareResult compareResultValue={compareOut}></CompareResult>
              </div>
        </div>
    </div>
  );
}

export default CompareMainContainer;