import { Component } from "react";

class Message extends Component{
    render(){
        return <header><h1>Below is the comparing result of Your {this.props.type}</h1></header>;
    }
}

export default Message;