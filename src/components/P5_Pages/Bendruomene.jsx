import { useContext } from "react";
import UsersContext from "../../contexts/UsersContext";
import UserCard from "../P2_Molecules/UserCard";

const Bendruomene = () => {
    const {users,currentUser}=useContext(UsersContext);
    return ( 
        <main>
            <h1>Mūsų nariai:</h1>
            <div>
                {
                    users.map(user=><UserCard
                        key={user.id}
                        user={user}
                        currentUser={currentUser}
                    />)
                }
            </div>
        </main>
     );
}
 
export default Bendruomene;