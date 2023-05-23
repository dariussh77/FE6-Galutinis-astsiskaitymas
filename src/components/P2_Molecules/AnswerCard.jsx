import { useContext } from "react";
import UsersContext from "../../contexts/UsersContext";
import { styled } from "styled-components";
const DivAnsCss=styled.div`
    img{
        height: 20px;
    }
    p{
        width: 70vw;
    }
    >div{
        margin:5px;
        display: flex;
        h5{
            margin: 0;
        }
    } 
`;

const AnswerCard = ({answer}) => {
    //console.log('answer: ', answer);
    const {users}=useContext(UsersContext);
    return ( 
        <DivAnsCss>
            <div>
                <img src={users.find(e=>e.id===answer.creator).avatar} alt={users.find(e=>e.id===answer.creator).userName} />
                <h5>{users.find(e=>e.id===answer.creator).userName}</h5>
            </div>
            <p>{answer.answer}</p>
        </DivAnsCss>
     );
}
 
export default AnswerCard;