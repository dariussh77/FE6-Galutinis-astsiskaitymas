const UserCard = ({user}) => {
    return ( 
        <div>
            <h2>{user.userName}</h2>
            <img src={user.avatar} alt={user.userName} />
        </div>
     );
}
 
export default UserCard;