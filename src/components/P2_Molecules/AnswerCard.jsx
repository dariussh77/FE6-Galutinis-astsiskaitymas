import { useContext } from "react";
import UsersContext from "../../contexts/UsersContext";


const AnswerCard = ({answer}) => {
    //console.log('answer: ', answer);
    const {users}=useContext(UsersContext);
    return ( 
        <div>
            <img src={users.find(e=>e.id===answer.creator).avatar} alt={users.find(e=>e.id===answer.creator).userName} />
            <h5>{users.find(e=>e.id===answer.creator).userName}</h5>
            <p>{answer.answer}</p>
        </div>
     );
}
 
export default AnswerCard;