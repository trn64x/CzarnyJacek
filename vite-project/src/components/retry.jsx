import {useContext} from 'react';
import './retry.css';
import { retryContext } from '../context/contextretryProvider';
import { newContext } from '../context/contextmenuProvider';
export default function Retrymenu(){
    let {gameStatus, setgameStatus} = useContext(retryContext);
    let {menu, setMenu} = useContext(newContext);
    function gamestatusReplay(){
        setgameStatus("");
    }
    function gamestatusMenu(){
        setgameStatus("");
        setMenu(true);
    }
    return(
<>
<div className="container-retry">
{gameStatus}
<button onClick={gamestatusReplay}>Retry</button>
<button onClick={gamestatusMenu}>Menu</button>
</div>
</>
    );
}