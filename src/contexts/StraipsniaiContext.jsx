import { createContext,useEffect,useReducer,useState } from "react";
const StraipsniaiContext=createContext();
const StraipsniaiAction={
    get:"get_straipsniai",
    add:"add_straipsniai"
};
const reducer=(state,action)=>{
    switch(action.type){
        case StraipsniaiAction.get: return action.data;
        default: return state;
    }
};
const StraipsniaiProvider = ({children}) => {
    
    const [straipsniai,setStraipsniai]=useReducer(reducer,[]);
    useEffect(()=>{
        fetch(`http://localhost:7777/straipsniai`)
            .then(res=>res.json())
            .then(data=>setStraipsniai({
                type:StraipsniaiAction.get,
                data:data
            }));
    },[]);
    const [strNr,setStrNr]=useState(straipsniai.length);
    return ( 
        <StraipsniaiContext.Provider
            value={{
                straipsniai,
                setStraipsniai,
                StraipsniaiAction,
                strNr,
                setStrNr
            }}
        >
            {children}
        </StraipsniaiContext.Provider>
     );
}
export {StraipsniaiProvider}; 
export default StraipsniaiContext;