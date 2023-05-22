import { useContext } from "react";
import UsersContext from "../../contexts/UsersContext";
import UserCard from "../P2_Molecules/UserCard";
import { styled } from "styled-components";
const MainBCss=styled.main`
    >div{
        .usercard{
            border: 1px solid black;
            display: flex;
            flex-direction: column;
            gap:10px;
            img{
                width:100px;
                border: 1px solid black;
                border-radius: 50px;
            }
        }
        .locked{
            opacity: 50%;
        }
        display: flex;
        flex-wrap: wrap;
        gap:20px
    }
`;

const Bendruomene = () => {
    const {users,currentUser,setUsers,UsersAction}=useContext(UsersContext);
    return ( 
        <MainBCss>
            <h1>Mūsų nariai:</h1>
            <div>
                {
                    users.map(user=><UserCard
                        key={user.id}
                        user={user}
                        currentUser={currentUser}
                        setUsers={setUsers}
                        UsersAction={UsersAction}
                    />)
                }
            </div>
        </MainBCss>
     );
}
 
export default Bendruomene;