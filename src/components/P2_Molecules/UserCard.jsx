import { useNavigate } from "react-router";

const UserCard = ({user,currentUser}) => {
    const navigate=useNavigate();
    
/*     const fEditUserClick=()=>{
    navigate(`/editUser/${user.id}`,{state:user});
    }; */
    //console.log('currentUser: ', currentUser);
    return ( 
        <div className="usercard">
            <h2>{user.userName}</h2>
            <img src={user.avatar} alt={user.userName} />
            {
                currentUser.admin
                    &&<>
                        <button onClick={()=>navigate(`/editUser/${user.id}`,{state:user})} >Redaguoti</button>
                        <button>Trinti</button>
                    </>
            }
        </div>
     );
}
 
export default UserCard;