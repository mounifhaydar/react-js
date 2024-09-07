import React, { useState ,useEffect, useRef } from 'react';
import CompareInput from './CompareInput';
import Message from './Message';
import CompareResult from './CompareResult';
// Import spinner component if using react-spinners
import { ClipLoader } from 'react-spinners'; 

import './CompareMainContainer.css';
import ActionBar from '../ActionBar';
import { API_CONSTANTS, APP_CONSTANTS } from '../../constants';
import { JSON_EXAMPLE_LEFT, JSON_EXAMPLE_RIGHT } from '../../constants/jsonExample';

const leftS = "actual";
const rightS = "expected";



function CompareMainContainer(){

  
  const [leftInput, setLeftInput] = useState(null); // Use state for dynamic values
  const [rightInput, setRightInput] = useState(null); // Use state for dynamic values

  const [compareOut, setCompareOut]=useState(null);
  
  const [loading, setLoading] = useState(false); // State to track loading
  const resultRef = useRef(null); // Create a ref for the result element

  const validateJson = (jsonString) => {
    try {
      JSON.parse(jsonString);
      return true; // JSON is valid
    } catch (e) {
      return false; // JSON is invalid
    }
  };

  const buildComparatorInput = () => {
     const payload = {
      actual: JSON.parse(leftInput),
      expected: JSON.parse(rightInput)
    };
    // Convert the object to a JSON string if needed
    const jsonString = JSON.stringify(payload);
    return jsonString;
  };

  //initialize the form
useEffect(() => {
  setLeftInput(JSON.stringify(JSON_EXAMPLE_LEFT, null, 2));
  setRightInput(JSON.stringify(JSON_EXAMPLE_RIGHT, null, 2));
  //onClickCompare();
},[]);


const fetchData = async (jsonString) => {
  try {
    setLoading(true); // Set loading state to true before API call
    const response = await fetch(API_CONSTANTS.COMPARATOR_ROUTE_COMPARE_DETAILS, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: jsonString,
    }).then((response) => response.json())
    .then((data) => {
      setCompareOut(JSON.stringify(data, null, 2));
      console.log(data);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
      alert("error on calling compare API: ", error);
    })
    .finally(() => {
      setLoading(false); // Set loading state to false after API call
     // setTimeout(() => {
     
      /*
      if (resultRef.current) {
        resultRef.current.scrollIntoView({ behavior: 'smooth'  ,block: 'start', // Align the top of the element with the top of the viewport
        }); // Scroll to the element
        }*/
    //  }, 100); // Adjust delay if needed
    });

    /*if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    setCompareOut(JSON.stringify(data, null, 2));  
    setLoading(false); // Set loading state to false after API call
    setTimeout(() => {//to avoid delay Im used the useEffect
      if (resultRef.current) {
        console.log(resultRef);
        resultRef.current.scrollIntoView({ behavior: 'smooth'  ,block: 'start', // Align the top of the element with the top of the viewport
          }); // Scroll to the element
      }
  }, 500); // Adjust delay if needed
    */

  window.requestAnimationFrame(() => {
  if (resultRef.current) {
    console.log(resultRef);
    resultRef.current.scrollIntoView({ behavior: 'smooth'  ,block: 'start', // Align the top of the element with the top of the viewport
      }); // Scroll to the element
  }
});

  } catch (error) {
    setLoading(false); // Set loading state to false after API call
    console.error('Error fetching data:', error);
  }
};

const onClickCompare = async () => {
  if(leftInput && rightInput && validateJson(leftInput) && validateJson(rightInput)){
    
    // Create the JSON object
    const jsonString = buildComparatorInput();


  
  fetchData(jsonString);
}
};
/*useEffect(() => {
  onClickCompare();
 if(leftInput && rightInput && validateJson(leftInput) && validateJson(rightInput)){
    
  // Create the JSON object
  const jsonString = buildComparatorInput();



fetchData(jsonString);
}
}, [leftInput, rightInput]);
*/

  return (
    <div className="CompareMainContainer">
      <div>
        <div id="input-left" className="left input-left">
            <CompareInput value={leftInput|| ""} onChange={setLeftInput} ></CompareInput>
        </div>
        <div id="indicator" className='indicator'>
        &lt;&lt;{leftS}
        <br></br>
        {rightS}&gt;&gt;

        <div>
                {/* Conditionally render the spinner or the main content */}
      {loading ? (
        <div className="spinner-container">
          {/* Display spinner while loading */}
          <ClipLoader color="#00e0ac" loading={loading} size={50} />
        </div>
      ) :(
        
                <div/>
                
      )}
              </div>

        </div>
        <div id="input-right" className="right  input-right">
            <CompareInput value={rightInput|| ""} onChange={setRightInput} ></CompareInput>
        </div>
        </div>
        <div id="actionBar" className="actionBar">
          <ActionBar onClickSwap={(v) => alert(v)} onClickCompare={(v) => onClickCompare()} onClickClear={(v) => alert(v)}></ActionBar>
        </div>
        <div ref={resultRef} className="mainCompareResult">
             
                {/* Conditionally render the spinner or the main content */}
      {loading ? (
        <div>
        </div>
      ) :(
        <>
        <Message type="JSON"></Message>
        <div  >
               <CompareResult  compareResultValue={compareOut|| ""}></CompareResult>
                
                </div>
                </>
      )}
             
        </div>
    </div>
  );
}

export default CompareMainContainer;