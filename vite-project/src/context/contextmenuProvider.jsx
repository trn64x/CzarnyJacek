import { createContext} from "react";
import {useState} from 'react';
export const newContext = createContext();
function ContextProvider({children}){
    const [menu, setMenu] = useState(true);
return(
    <newContext.Provider value={{menu,setMenu}}>{children}</newContext.Provider>
);
}
export default ContextProvider;