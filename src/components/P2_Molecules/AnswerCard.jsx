import { useContext } from "react";
import UsersContext from "../../contexts/UsersContext";
import { styled } from "styled-components";
import AnswersContext from "../../contexts/AnswersContext";
const DivAnsCss=styled.div`
    position: relative;
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
    .thumbsq{
        margin:0;
        position: absolute;
        top:0px;
        left:100px;
        i{
            font-size: 12px;
            cursor: pointer;
        }
    }
`;
const AnswerCard = ({answer}) => {
    const {users,currentUser,loggedIn}=useContext(UsersContext);
    const{AnswerAction,setAnswers}=useContext(AnswersContext);
    const fAddLike=()=>{
        loggedIn&&!answer.usersliked.includes(currentUser.id)&&!answer.usersdisliked.includes(currentUser.id)
            ?setAnswers({
                type:AnswerAction.likeAdd,
                data:{
                    ...answer,
                    likes:(answer.likes+1),
                    dislikes:(answer.dislikes),
                    usersliked:[...answer.usersliked,currentUser.id],
                    usersdisliked:answer.usersdisliked.filter(e=>e!==currentUser.id)
            }})
            :loggedIn&&!answer.usersliked.includes(currentUser.id)&&answer.usersdisliked.includes(currentUser.id)
            ?setAnswers({
                type:AnswerAction.likeAdd,
                data:{...answer,
                likes:(answer.likes+1), 
                dislikes:(answer.dislikes-1), 
                usersliked:[...answer.usersliked,currentUser.id],
                usersdisliked:answer.usersdisliked.filter(e=>e!==currentUser.id)
            }})
            :loggedIn&&answer.usersliked.includes(currentUser.id)?alert('Jau balsavote'):alert('Esate neprisijungęs');
    };
    const fAddDislike=()=>{
            loggedIn&&!answer.usersdisliked.includes(currentUser.id)&&!answer.usersliked.includes(currentUser.id)
                ?setAnswers({
                    type:AnswerAction.likeAdd,
                    data:{...answer,
                    dislikes:(answer.dislikes+1), 
                    likes:(answer.likes), 
                    usersdisliked:[...answer.usersdisliked,currentUser.id],
                    usersliked:answer.usersliked.filter(e=>e!==currentUser.id)
                }})
                :loggedIn&&!answer.usersdisliked.includes(currentUser.id)&&answer.usersliked.includes(currentUser.id)
                ?setAnswers({
                    type:AnswerAction.likeAdd,
                    data:{...answer,
                    dislikes:(answer.dislikes+1), 
                    likes:(answer.likes-1), 
                    usersdisliked:[...answer.usersdisliked,currentUser.id],
                    usersliked:answer.usersliked.filter(e=>e!==currentUser.id)
                }})
                :loggedIn&&answer.usersdisliked.includes(currentUser.id)?alert('Jau balsavote'):alert('Esate neprisijungęs');
    };
    return ( 
        <DivAnsCss>
            <div>
                <img src={users.find(e=>e.id===answer.creator).avatar} alt={users.find(e=>e.id===answer.creator).userName} />
                <h5>{users.find(e=>e.id===answer.creator).userName}</h5>
            </div>
            <p>{answer.answer}</p>
            <div className="thumbsq">
                <i onClick={()=>fAddLike()} className="bi bi-hand-thumbs-up">{answer.likes}</i>
                <i onClick={()=>fAddDislike()} className="bi bi-hand-thumbs-down"> {answer.dislikes}</i>
            </div>         
        </DivAnsCss>
     );
}
 
export default AnswerCard;