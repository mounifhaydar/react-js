import React, { useState ,useEffect} from 'react';
import './CompareInput.css'

function CompareInput(props){
    const [text, setText] = useState(null); // Use state for dynamic values
    if(props.value){
      setText(props.value);
    }

   /* useEffect(() => {
      fetch(
        'https://api.github.com/users/mounifhaydar'
      ).then(response => response.json()).then((data) => {
        setText(JSON.stringify(data, null, 2)); // Correctly setting the state with fetched data
      });
    },[]);*/

  return (
    <div className="CompareInput">
      <textarea className='input'
        rows="5"
        cols="30"
        placeholder="Enter your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

export default CompareInput;