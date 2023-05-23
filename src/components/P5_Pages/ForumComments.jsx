import { useEffect, useState,useContext } from "react";
import UsersContext from "../../contexts/UsersContext";
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import AnswersContext from "../../contexts/AnswersContext";
import AnswerCard from "../P2_Molecules/AnswerCard";
import { useFormik } from "formik";
import { v4 as uuidv4 } from 'uuid';
const MainCommentsCSS=styled.main`
     width: 100%;
    .questionDiv{
        margin: 20px;
        border: 1px solid black;
        >div{
            display: column;
            justify-content: space-between;
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
`;
const ForumComments = () => {
    const{answers,setAnswers,AnswerAction}=useContext(AnswersContext);
    const{users,currentUser,loggedIn}=useContext(UsersContext);
    const {id}=useParams();
    const [currentQ, setcurrentQ]=useState();
    useEffect(()=>{
        fetch(`http://localhost:7777/questions/${id}`)
            .then(res=>res.json())
            .then(data=>setcurrentQ(data));
    },[]);
    const initialValues={
        id:0,
        creator:'',
        replayTo:'',
        statementId:'',
        answer:'',
        likes:0,
        dislikes:0,
        modified: false
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
                    modified: false
            }});
            actions.resetForm(initialValues);
        }
    });
    return ( 
        <MainCommentsCSS>
            <div className="questionDiv">
                { 
                    currentQ&&users.find(e=>e.id===currentQ.creator)&&
                    <>
                        <h1>KLAUSIMAS:</h1>
                        <div>
                            <img src={users.find(e=>e.id===currentQ.creator).avatar} alt={users.find(e=>e.id===currentQ.creator).userName} />
                            <h4>{users.find(e=>e.id===currentQ.creator).userName}</h4>
                            <h5>{currentQ.tema}</h5>
                        </div>
                        <h2>{currentQ.question}</h2> 
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
                                    cols="100" rows="1"
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