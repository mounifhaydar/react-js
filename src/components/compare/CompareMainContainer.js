import React, { useState ,useEffect, useRef } from 'react';
import CompareInput from './CompareInput';
import Message from './Message';
import CompareResult from './CompareResult';
// Import spinner component if using react-spinners
import { ClipLoader } from 'react-spinners'; 

import './CompareMainContainer.css';
import ActionBar from '../ActionBar';


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

/*useEffect(() => {
  fetch(
    'https://api.github.com/users/mounifhaydar'
  ).then(response => response.json()).then((data) => {
    setCompareOut(JSON.stringify(data, null, 2)); // Correctly setting the state with fetched data
  });
},[]);*/

/*useEffect(() => {
  // POST request to the API
  fetch('https://json-comparator-initial.onrender.com/comparator/compare/details', {
    method: 'POST', // Set method to POST
    headers: {
      'Content-Type': 'application/json' // Set content type to JSON
    },
    body: JSON.stringify({ // Replace with actual data
      actual: {leftInput},
      expected: {rightInput}
    })
  })
    .then(response => response.json())
    .then(data => {
      setCompareOut(JSON.stringify(data, null, 2)); // Update state with fetched data
    })
    .catch(error => console.error('Error:', error)); // Handle errors
}, []); // Empty dependency array to run effect only once on mount
*/

useEffect(() => {
  if(leftInput && rightInput && validateJson(leftInput) && validateJson(rightInput)){
    
    // Create the JSON object
    const payload = {
      actual: JSON.parse(leftInput),
      expected: JSON.parse(rightInput)
    };

    // Convert the object to a JSON string if needed
    const jsonString = JSON.stringify(payload);

    //console.log(jsonString);

  const fetchData = async () => {
    try {
      setLoading(true); // Set loading state to true before API call
      //'https://json-comparator-initial.onrender.com/comparator/compare/details'
      const response = await fetch('/comparator/compare/details', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: jsonString,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setCompareOut(JSON.stringify(data, null, 2));
      setLoading(false); // Set loading state to false after API call
      setTimeout(() => {
      if (resultRef.current) {
        console.log(resultRef);
        resultRef.current.scrollIntoView({ behavior: 'smooth'  ,block: 'start', // Align the top of the element with the top of the viewport
          }); // Scroll to the element
      }
    }, 500); // Adjust delay if needed
    } catch (error) {
      setLoading(false); // Set loading state to false after API call
      console.error('Error fetching data:', error);
    }
  };
  
  fetchData();
}
}, [leftInput, rightInput]);

//left
// useEffect(() => {
//   if (leftInput) {
//    // console.log(leftInput);
//     //setLeftInput(JSON.stringify(leftInput, null, 2)); // Update state properly
//   }
//   fetch(
//     'https://api.github.com/users/fanvsfan'
//   ).then(response => response.json()).then((data) => {
//     setLeftInput(JSON.stringify(data, null, 2)); // Correctly setting the state with fetched data
//   });
// }, []); // Dependency on leftInput to trigger the effect
const createTmpJson = (value) => {
  const jsTmp = {actual: value};
  return jsTmp;
};



//right on change
useEffect(() => {
  if (rightInput) {
   // console.log(rightInput);
    //setRightInput(JSON.stringify(rightInput, null, 2)); // Update state properly
  }
  fetch(
    'https://api.github.com/users/mojombo'
  ).then(response => response.json()).then((data) => {
    setRightInput(JSON.stringify(data, null, 2)); // Correctly setting the state with fetched data
  });
}, []); // Dependency on setRightInput to trigger the effect


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
          <ActionBar></ActionBar>
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