import { useEffect, useState,useContext } from "react";
import QuestionsContext from "../../contexts/QuestionsContext";
import UsersContext from "../../contexts/UsersContext";
import { useParams } from "react-router-dom";
import styled from 'styled-components';
const MainCommentsCSS=styled.main`
    border: 1px solid black;
    width: 100%;
`;
const ForumComments = () => {
    const{questions}=useContext(QuestionsContext);
    const{users}=useContext(UsersContext);
    console.log('questions: ', questions);
    const {id}=useParams();
    const [currentQ, setcurrentQ]=useState();
    useEffect(()=>{
        fetch(`http://localhost:7777/questions/${id}`)
            .then(res=>res.json())
            .then(data=>setcurrentQ(data));
    },[]);
    return ( 
        <MainCommentsCSS>
            <div className="questionDiv">
                { 
                    currentQ&&
                    <>
                        <h1>KLAUSIMAS:</h1>
                        <h2>{currentQ.question}</h2> 
                        <img src={users.find(e=>e.id===currentQ.creator).avatar} alt={users.find(e=>e.id===currentQ.creator).userName} />
                        <h4>{users.find(e=>e.id===currentQ.creator).userName}</h4>
                        <h5>{currentQ.tema}</h5>
                    </>
                }        
            </div>
            <div className="commentsDiv">
                
            </div>

                
        </MainCommentsCSS>
     );
}
 
export default ForumComments;