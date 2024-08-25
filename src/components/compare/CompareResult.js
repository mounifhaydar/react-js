import React, { Component, useState } from 'react';
import './CompareResult.css'

class CompareResult extends Component{
   
  handleClick(){
console.log("result clicked");
  }

  render() {
    return (<div className="CompareResult">
      

<textarea readOnly className='output'
          placeholder="Here is the result of compare..."
          
          onClick={this.handleClick}>
        
                </textarea>
    </div>);
}
}

export default CompareResult;