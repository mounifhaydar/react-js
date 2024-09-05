import React, { Component, useState, useEffect } from 'react';
import './CompareResult.css'

class CompareResult extends Component{

  constructor(){
    super();
    this.state = {
      compareOutput: null
    };
  }

  handleClick(){
console.log("result clicked");

  }

  render() {
    return (<div className="compareResult">
      

<textarea readOnly className='output'
          placeholder="Here is the result of compare..."
          value={this.props.compareResultValue || ""}
          onClick={this.handleClick}>
        
                </textarea>
    </div>);
}
}

export default CompareResult;