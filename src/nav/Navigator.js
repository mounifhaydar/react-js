import './Navigator.css';
import React from 'react';

import { NavLink } from 'react-router-dom';

function Navigator(props){
    const {name, style, link_url} = props;
   
    const itemOnClick = () => {
        console.log("navifator item Clicked");
    }

    return <div className={style +" menu"} onClick={itemOnClick}>
        <NavLink to={link_url} activeclassname="active"> {name}</NavLink>
    </div>
}

export default Navigator;