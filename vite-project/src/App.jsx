import { useEffect, useState } from "react";
import MenuSection from "./components/menu";
import Game from "./components/game";
import {useContext} from 'react';
import { newContext } from "./context/contextProvider";
import * as All from "@letele/playing-cards";
import "./App.css";

function App() {
const {menu, setMenu} = useContext(newContext);
  return (
  <>
  { !menu ?
   <Game />
   :
   <MenuSection />
  }
  </>
  );
}

export default App;
