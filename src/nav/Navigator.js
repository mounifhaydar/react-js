import './Navigator.css';

function Navigator(props){
    const {name, style} = props;
   
    const itemOnClick = () => {
        console.log("navifator item Clicked");
    }
    console.log(props);
    return <div className={style} onClick={itemOnClick}>
        {name}
    </div>
}

export default Navigator;