import { createContext, useState } from "react";

export const retryContext = createContext();
function ContextRetryprovider({children}){
    let [gameStatus, setgameStatus] = useState("");
    return (
<retryContext.Provider value={{gameStatus, setgameStatus}}>{children}</retryContext.Provider>
    );

}
export default ContextRetryprovider;