const UserCard = ({user,currentUser}) => {
    console.log('currentUser: ', currentUser);
    return ( 
        <div>
            <h2>{user.userName}</h2>
            <img src={user.avatar} alt={user.userName} />
            {
                currentUser.admin
                    &&<>
                        <button>Redaguoti</button>
                        <button>Trinti</button>
                    </>
            }
        </div>
     );
}
 
export default UserCard;