import { useEffect,useContext } from "react";
import UsersContext from "../../contexts/UsersContext";
import { useNavigate, useParams} from "react-router-dom";
import styled from 'styled-components';
import AnswersContext from "../../contexts/AnswersContext";
import AnswerCard from "../P2_Molecules/AnswerCard";
import { useFormik } from "formik";
import { v4 as uuidv4 } from 'uuid';
import QuestionsContext from "../../contexts/QuestionsContext";
const MainCommentsCSS=styled.main`
    position: relative;
     width: 100%;
    .questionDiv{
        margin: 20px;
        border: 1px solid black;
        >div{
            display: column;
            >img{
                height: 50px;
                border-radius: 25px;
            }
        }
    }
    .commentsDiv{
        margin: 20px;
        border: 1px solid black;
    }
    .questionDiv{
        i{
            cursor: pointer;
        }
    }
    .qspec{
        display: flex;
        justify-content: left;
        gap: 20px;
    }
    .thumbsqe{
        position: absolute;
        top:75px;
        left: 600px;
        display: flex;
        gap:10px;
    }
    form{
        padding: 20px;
        display: flex;
        textarea{
            resize: none;
        }
    }
`;
const ForumComments = () => {
    const{id}=useParams();
    const{answers,setAnswers,AnswerAction}=useContext(AnswersContext);
    const{setQuestions,QuestionsAction,currentQ,setCurrentQ}=useContext(QuestionsContext);
    useEffect(()=>{
        fetch(`http://localhost:7777/questions/${id}`)
            .then(res=>res.json())
            .then(data=>setCurrentQ(data));
    },[]);
    const{users,currentUser,loggedIn}=useContext(UsersContext);
    const initialValues={
        id:0,
        creator:'',
        replayTo:'',
        statementId:'',
        answer:'',
        likes:0,
        dislikes:0,
        modified: false,
        usersliked: [],
        usersdisliked: []
    };
    const formik=useFormik({
        initialValues:initialValues,
        onSubmit:(values, actions)=>{
            setAnswers({
                type:AnswerAction.create,
                data:{
                    id:uuidv4(),
                    creator:currentUser.id,
                    replayTo:'questions',
                    statementId:currentQ.id,
                    answer:values.answer,
                    likes:0,
                    dislikes:0,
                    modified: false,
                    usersliked: [],
                    usersdisliked: []
            }});
            actions.resetForm(initialValues);
            setQuestions({
                type:QuestionsAction.edit,
                data:{
                    ...currentQ,
                    anwCount:(currentQ.anwCount+1)
                }
            })
        }
    });
    const fAddLike=()=>{
        loggedIn&&!currentQ.usersliked.includes(currentUser.id)&&!currentQ.usersdisliked.includes(currentUser.id)
            ?setQuestions({
                type:QuestionsAction.edit,
                data:{
                    ...currentQ,
                    likes:(currentQ.likes+1),
                    dislikes:(currentQ.dislikes),
                    usersliked:[...currentQ.usersliked,currentUser.id],
                    usersdisliked:currentQ.usersdisliked.filter(e=>e!==currentUser.id)
            }})
            :loggedIn&&!currentQ.usersliked.includes(currentUser.id)&&currentQ.usersdisliked.includes(currentUser.id)
            ?setQuestions({
                type:QuestionsAction.edit,
                data:{...currentQ,
                likes:(currentQ.likes+1), 
                dislikes:(currentQ.dislikes-1), 
                usersliked:[...currentQ.usersliked,currentUser.id],
                usersdisliked:currentQ.usersdisliked.filter(e=>e!==currentUser.id)
            }})
            :loggedIn&&currentQ.usersliked.includes(currentUser.id)?alert('Jau balsavote'):alert('Esate neprisijungęs');
            /* navigate(`/forumas/${currentQ.id}`); */
            setTimeout(()=>{
                fetch(`http://localhost:7777/questions/${id}`)
                    .then(res=>res.json())
                    .then(data=>setCurrentQ(data));
            },300)
    };
    const fAddDislike=()=>{
            loggedIn&&!currentQ.usersdisliked.includes(currentUser.id)&&!currentQ.usersliked.includes(currentUser.id)
                ?setQuestions({
                    type:QuestionsAction.edit,
                    data:{...currentQ,
                    dislikes:(currentQ.dislikes+1), 
                    likes:(currentQ.likes), 
                    usersdisliked:[...currentQ.usersdisliked,currentUser.id],
                    usersliked:currentQ.usersliked.filter(e=>e!==currentUser.id)
                }})
                :loggedIn&&!currentQ.usersdisliked.includes(currentUser.id)&&currentQ.usersliked.includes(currentUser.id)
                ?setQuestions({
                    type:QuestionsAction.edit,
                    data:{...currentQ,
                    dislikes:(currentQ.dislikes+1), 
                    likes:(currentQ.likes-1), 
                    usersdisliked:[...currentQ.usersdisliked,currentUser.id],
                    usersliked:currentQ.usersliked.filter(e=>e!==currentUser.id)
                }})
                :loggedIn&&currentQ.usersdisliked.includes(currentUser.id)?alert('Jau balsavote'):alert('Esate neprisijungęs');
                /* navigate(`/forumas/${currentQ.id}`); */
                setTimeout(()=>{
                    fetch(`http://localhost:7777/questions/${id}`)
                        .then(res=>res.json())
                        .then(data=>setCurrentQ(data));
                },300)
    };
    return ( 
        <MainCommentsCSS>
            <div className="questionDiv">
                <div className="thumbsqe">
                    <i onClick={()=>fAddLike()} className="bi bi-hand-thumbs-up">{currentQ.likes}</i>
                    <i onClick={()=>fAddDislike()} className="bi bi-hand-thumbs-down"> {currentQ.dislikes}</i>
                </div> 
                { 
                    currentQ&&users.find(e=>e.id===currentQ.creator)&&
                    <>
                        <h1>KLAUSIMAS:</h1>
                        <div className="qspec">
                            <img src={users.find(e=>e.id===currentQ.creator).avatar} alt={users.find(e=>e.id===currentQ.creator).userName} />
                            <h4>{users.find(e=>e.id===currentQ.creator).userName}</h4>
                            <h5>{currentQ.tema}</h5>
                        </div>
                        <h2>{currentQ.question}</h2> 
                        <h6>Viso {currentQ.anwCount} atsakymai</h6>
                        <div className="commentsDiv">
                            {
                                answers&&
                                    <>
                                        {answers.filter(e=>e.statementId===currentQ.id).map(answer=><AnswerCard
                                            key={answer.id}
                                            answer={answer}
                                        />)}
                                    </>
                            }
                        </div>
                        {
                            loggedIn
                            ?<form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
                                <label htmlFor="answer">Rašyti komentarą:</label>
                                <textarea
                                    type="text"
                                    name="answer" id="answer" 
                                    cols="100" rows="2"
                                    value={formik.values.answer}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                ></textarea>
                                <input type="submit" value="Komentuoti" />
                            </form>
                            :<p>Prisijunkite norėdami komentuoti</p>
                        }
                    </>
                }        
            </div>    
        </MainCommentsCSS>
     );
}
 
export default ForumComments;