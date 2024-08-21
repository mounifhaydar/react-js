import { Component } from "react";

class ActionBar extends Component{
    constructor(){
        super();
        this.state={
            sLeft: "",
            sRight: "",
            bSwipe:true,
            bCompare:false,
            bClear:true,
        }
    }

    swipe(){
        //this.state.bCompare=!this.state.bCompare;
        this.setState({
            sLeft:this.state.sRight,
            sRight:this.state.sLeft,
        }
        );
    }

    compare(){
        
    }

    clear(){
        //this.state.bCompare=!this.state.bCompare;
        this.setState({
            sLeft:"",
            sRight:"",
            bCompare:false,
        }
        );
    }

    render() {
        return <div > 
            <button disabled={!this.state.bSwipe} onClick={() => this.swipe()}>Swipe</button>
            <button disabled={!this.state.bCompare} onClick={() => this.compare()}>Compare</button>
            <button disabled={!this.state.bClear} onClick={() => this.clear()}>Clear</button>
        </div>;
    }
}

export default ActionBar;