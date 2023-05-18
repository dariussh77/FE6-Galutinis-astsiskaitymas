import { createContext, useEffect, useReducer } from "react";

const UsersContext=createContext();
const UsersAction={
    get:"get_users",
    edit:"edit_user"
};
const reducer=(state,action)=>{
    switch(action.type){
        case UsersAction.get: return action.data;
        default: return state;
    }
}
const UsersProvider = ({children}) => {
    const [users, setUsers]=useReducer(reducer,[]);
    useEffect(()=>{
        fetch(`http://localhost:7777/users`)
            .then(res=>res.json())
            .then(data=>setUsers({
                type:UsersAction.get,
                data:data
            }))
    },[]);
    return ( 
        <UsersContext.Provider
            value={{
                users, 
                setUsers,
                UsersAction
            }}
        >
            {children}
        </UsersContext.Provider>
     );
}
export {UsersProvider}; 
export default UsersContext;