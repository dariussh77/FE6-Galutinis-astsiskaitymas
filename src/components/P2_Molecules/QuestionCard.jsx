import styled from 'styled-components';
import UsersContext from '../../contexts/UsersContext';
import { useContext } from 'react';
const CardCSS = styled.div`
    display: flex;
    gap:20px;
    img{
        width: 40px;
        height: 40px;
        border-radius: 20px;
    }
`; 
const QuestionCard = ({question}) => {
    const{users}=useContext(UsersContext);
    //console.log('users: ', users);
    //console.log('r: ', users.find(e=>e.id===question.creator));
    return ( 
        <CardCSS>
            <img src={users.find(e=>e.id===question.creator).avatar} alt={users.find(e=>e.id===question.creator).userName} />
            <h4>{users.find(e=>e.id===question.creator).userName}</h4>
            <h3>--{question.question}--</h3>
            <h5>{question.tema}</h5>

        </CardCSS>
     );
}
 
export default QuestionCard;