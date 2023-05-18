import { createContext,useEffect,useReducer } from "react";
const TemosAction={
    get:"get_temos",
    add:"add_temos"
};
const TemosContext=createContext();
const reducer=(state,action)=>{
    switch(TemosAction.type){
        case TemosAction.get:return action.data;
        default: return state;
    }
};
const TemosProvider = ({children}) => {
    const [temos, setTemos]=useReducer(reducer,[]);
    useEffect(()=>{
        fetch(`http://localhost:7777/temos`)
            .then(res=>res.json())
            .then(data=>setTemos({
                type:TemosAction.get,
                data:data
            }));
    },[])

    return ( 
        <TemosContext.Provider
            value={{
                temos, 
                setTemos,
                TemosAction
            }}
        >
            {children}
        </TemosContext.Provider>
     );
}
export {TemosProvider}; 
export default TemosContext;