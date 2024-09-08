import { useState } from "react";
import './ActionBar.css';
const ActionBar = (props) => {
    const {sLeft, sRight,onClickSwap, onClickCompare, onClickClear}=props;
    const [bSwap, setBSwap] = useState(true);
    const [bCompare, setBCompare] = useState(true);
    const [bClear, setBClear] = useState(true);

        
    

    function swape  ()  {
        onClickSwap("swap");
        
    };

    function compare  () {
        onClickCompare("compare");
    };

    function clear () {
        onClickClear("clear");
    };

        return (<div > 
            <button disabled={!bSwap} onClick={() => swape()}>Swape</button>
            <button disabled={!bCompare} onClick={() => compare()}>Compare</button>
            <button disabled={!bClear} onClick={() => clear()}>Clear</button>
        </div>
        );
}

export default ActionBar;