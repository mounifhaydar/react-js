import './Navigator.css';

function Navigator(props){
    console.log(props);
    return <div className={props.style}>
        {props.name}
    </div>
}

export default Navigator;