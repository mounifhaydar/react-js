import React, { useState ,useEffect} from 'react';
import './CompareInput.css'

function CompareInput(props){
    // Use the value and onChange prop passed from the parent
  const { value, onChange } = props;
  const [textInputValue, setTextInputValue] = useState(value || ""); // Initialize with props.value

  function onChangeText(value) {
     setTextInputValue(value);
      onChange(value); // Call the onChange function from props to propagate the change up
  }

  useEffect(() => {//To render the textinput when receive value from the parent component throw the prop
    setTextInputValue(value || ""); // Update text state when props.value changes
  }, [value]); // Dependency array to re-run effect when props.value changes


   
  return (
    <div className="compareInput">
      <textarea className='input'
        rows="5"
        cols="30"
        placeholder="Past your json here..."
        value={textInputValue|| ""}
        onChange={(e) => onChangeText(e.target.value)}
      />
    </div>
  );
}

export default CompareInput;