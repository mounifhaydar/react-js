import React, { useState, useEffect } from 'react';
import './CompareResult.css'

function CompareResult(props) {
  const { compareResultValue } = props;
  //const resultValue= JSON.parse(compareResultValue);
  //const {diffValue}= resultValue;
  const [compareOutput, setCompareOutput] = useState(null);

  // Parse the JSON string into an object
  let data;
  try {
    data = JSON.parse(compareResultValue);
  } catch (error) {
    //console.error('Failed to parse JSON:', error);
    //console.log(compareResultValue);
    data = {}; // Default to an empty object if parsing fails
  }

  // Extract the fields you need using destructuring
  const { diffNode = {},diffCounter=0, equalCounter=0,diffSet=[] ,noDiff=true} = data;
  // Convert the occupation object to a JSON string for display
  const diffNodeString = JSON.stringify(diffNode, null, 2);
  const diffSetString = JSON.stringify(diffSet, null, 2);
// Convert boolean to a readable string
const noDiffString = noDiff ? 'Yes' : 'No';

  //initialize the form
  // useEffect(() => {
    
  // },[]);
  
  const handleClick = (e) => {
    console.log("result clicked");
    console.log(compareResultValue);

  };

  return (<div className="compareResult">

    <div className='diffResult'>
      <textarea readOnly className='output'
        placeholder="Here is the result of compare..."
        value={diffNodeString || ""}
        onClick={handleClick}>

      </textarea>
    </div>
    <div className='diffCount'>
      <textarea readOnly className='output'
        placeholder="Here is the counted result"
        value={diffSetString || ""}>
      </textarea>
    </div>
    <div className="diffState">
            <h3 style={{ color: 'red' }}>diffCounter: {diffCounter}</h3>
            <h3 style={{ color: 'green' }}>equalCounter: {equalCounter}</h3>
            <h3>is JSON match: {noDiffString}</h3>
        </div>
  </div>);

};

export default CompareResult;