import React, { useState } from 'react';
import './CompareInput.css'

function CompareInput(){
    const [text, setText] = useState("");

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