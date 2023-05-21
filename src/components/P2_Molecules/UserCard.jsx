import { useNavigate } from "react-router";

const UserCard = ({user,currentUser,setUsers,UsersAction}) => {
    console.log('UsersAction: ', UsersAction);
    const navigate=useNavigate();
    //console.log('currentUser: ', currentUser);
    return ( 
        <div className="usercard">
            <h2>{user.userName}</h2>
            <img src={user.avatar} alt={user.userName} />
            {
                currentUser.admin
                    &&<>
                        <button onClick={()=>navigate(`/editUser/${user.id}`,{state:user})} >Redaguoti</button>
                        <button onClick={()=>setUsers({type:UsersAction.delete, data:user})}>Trinti</button>
                    </>
            }
        </div>
     );
}
 
export default UserCard;