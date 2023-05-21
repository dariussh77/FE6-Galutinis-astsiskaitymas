import { createContext, useEffect, useReducer, useState } from "react";

const UsersContext=createContext();
const UsersAction={
    get:"get_users",
    edit:"edit_user",
    add:"add_user"
};
const reducer=(state,action)=>{
    switch(action.type){
        case UsersAction.get: return action.data;
        case UsersAction.add: 
            fetch(`http://localhost:7777/users`,{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(action.data)
            });
            console.log('action.data: ', action.data);
            return [...state, action.data];
        default: return state;
    };
    
}
const UsersProvider = ({children}) => {
    const [users, setUsers]=useReducer(reducer,[]);
    const [currentUser,setCurrentUser]=useState({
        id:0,
        userName:"Svečias",
        password:"",
        admin:false,
        email:"",
        avatar:"https://missionvet.ca/wp-content/uploads/2020/01/User-Profile-PNG-1-812x812.png",
        locked:false
    });
    const [loggedIn,setLoggedIn]=useState(false);
    const [showLogin,setShowLogin]=useState(false);
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
                UsersAction,
                currentUser,
                setCurrentUser,
                loggedIn,
                setLoggedIn,
                showLogin,
                setShowLogin
            }}
        >
            {children}
        </UsersContext.Provider>
     );
}
export {UsersProvider}; 
export default UsersContext;