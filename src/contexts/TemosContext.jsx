import { createContext,useEffect,useReducer,useState } from "react";
const TemosContext=createContext();
const TemosAction={
    get:"get_temos",
    add:"add_temos"
};

const reducer=(state,action)=>{
    switch(action.type){
        case TemosAction.get:return action.data;
        default: return state;
    }
};
const TemosProvider = ({children}) => {
    const [temos, setTemos]=useReducer(reducer,[]);
    const [currentTema,setCurrentTema]=useState('');

    
    useEffect(()=>{
        fetch(`http://localhost:7777/temos`)
            .then(res=>res.json())
            .then(data=>setTemos({
                type:TemosAction.get,
                data:data
            }));
    },[]);
    return ( 
        <TemosContext.Provider
            value={{
                temos, 
                setTemos,
                TemosAction,
                currentTema,
                setCurrentTema
            }}
        >
            {children}
        </TemosContext.Provider>
     );
}
export {TemosProvider}; 
export default TemosContext;