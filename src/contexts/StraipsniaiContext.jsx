import { createContext } from "react";
const StraipsniaiContext=createContext();

const StraipsniaiProvider = ({children}) => {
    
    return ( 
        <StraipsniaiContext.Provider
            value={{}}
        >
            {children}
        </StraipsniaiContext.Provider>
     );
}
export {StraipsniaiProvider}; 
export default StraipsniaiContext;