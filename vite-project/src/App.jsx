import { useEffect, useState} from "react";
import MenuSection from "./components/menu";
import Game from "./components/game";
import {useContext} from 'react';
import { newContext } from "./context/contextmenuProvider";
import * as All from "@letele/playing-cards";
import "./App.css";
import { retryContext } from "./context/contextretryProvider";
import Retrymenu from "./components/retry";

function App() {
const {menu, setMenu} = useContext(newContext);
const {gameStatus, setGameStatus} = useContext(retryContext);
  return (
  <>
  { !menu && gameStatus === "" ?
   <Game /> :null
  }
  { menu && gameStatus === "" ? <MenuSection /> : null}
  {!menu && gameStatus !== "" ? <Retrymenu/> : null}

  </>
  );
}

export default App;
