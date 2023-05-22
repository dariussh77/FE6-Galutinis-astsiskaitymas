import { useNavigate } from "react-router";

const UserCard = ({user,currentUser,setUsers,UsersAction}) => {
    const navigate=useNavigate();
    return ( 
        <>
            {
                user.locked?<div className="usercard locked">
                        <h2>{user.userName}</h2>
                        <img src={user.avatar} alt={user.userName} />
                        {
                            currentUser.admin || currentUser.id===user.id
                                ?<>
                                    <button onClick={()=>navigate(`/editUser/${user.id}`,{state:user})} >Redaguoti</button>
                                    {/* <button onClick={()=>setUsers({type:UsersAction.delete, data:user})}>Trinti</button> */}
                                </>:<></>
                        }
                    </div>
                    :<div className="usercard">
                        <h2>{user.userName}</h2>
                        <img src={user.avatar} alt={user.userName} />
                        {
                            currentUser.admin || currentUser.id==user.id
                                ?<>
                                    <button onClick={()=>navigate(`/editUser/${user.id}`,{state:user})} >Redaguoti</button>
                                    {/* <button onClick={()=>setUsers({type:UsersAction.delete, data:user})}>Trinti</button> */}
                                </>:<></>
                        }
                    </div>
            }
        </>
     );
}
 
export default UserCard;