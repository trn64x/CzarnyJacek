import "./menu.css"
import {useContext} from 'react';
import {useRef} from 'react';
import {newContext} from '../context/contextmenuProvider';
export default function MenuSection() {
    const {menu,setMenu} = useContext(newContext);
    function action(){
        console.log("clicked!");
        setMenu(!menu);
    }
    return(
        <div className="container">
            <h1>Black Jack</h1>
<button className="singleplayer" onClick={action} >Singleplayer</button>
<p>Coming soon!</p>
<button disabled = {true} className="multiplayer">Multiplayer</button>
<div className="buttons">
    <button className="mute" >Mute</button>
    <button className="options">Options</button>
    
    <p>Made by trn64x</p>
    <p>Version: -1.0.0</p>
</div>
        </div> 
    );
}