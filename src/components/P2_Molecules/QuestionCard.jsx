import styled from 'styled-components';
import UsersContext from '../../contexts/UsersContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
const CardCSS = styled.div`
    display: flex;
    gap:20px;
    img{
        width: 40px;
        height: 40px;
        border-radius: 20px;
    }
    h3:hover{
        cursor: pointer;
    }
    .thumbsqc{
        display: flex ;
        align-items: center;
        gap:5px
    }
`; 
const QuestionCard = ({question}) => {
    const navigate=useNavigate();
    const{users}=useContext(UsersContext);
    const fEnterComments=()=>{
        navigate(`/forumas/${question.id}`,{state:question});
    };
    //console.log('users: ', users);
    //console.log('r: ', users.find(e=>e.id===question.creator));
    return ( 
        <CardCSS>
            <img src={users.find(e=>e.id===question.creator).avatar} alt={users.find(e=>e.id===question.creator).userName} />
            <h4>{users.find(e=>e.id===question.creator).userName}</h4>
            <h3 onClick={()=>fEnterComments()}>--{question.question}--</h3>
            <h5>{question.tema}</h5>
            <h6>Komentarai: {question.anwCount}</h6>
            <div className="thumbsqc">
                    <i className="bi bi-hand-thumbs-up">{question.likes}</i>
                    <i className="bi bi-hand-thumbs-down"> {question.dislikes}</i>
            </div> 

        </CardCSS>
     );
     
}
export default QuestionCard;