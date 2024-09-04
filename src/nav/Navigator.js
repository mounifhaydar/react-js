import './Navigator.css';
import { Link } from 'react-router-dom';

function Navigator(props){
    const {name, style, link_url} = props;
   
    const itemOnClick = () => {
        console.log("navifator item Clicked");
    }
    console.log(props);
    return <div className={style} onClick={itemOnClick}>
        
        <Link to={link_url}> {name}</Link>
    </div>
}

export default Navigator;