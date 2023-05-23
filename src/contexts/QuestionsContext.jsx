import { createContext, useEffect, useReducer, useState } from "react";

const QuestionsContext=createContext();
const QuestionsAction={
    get:"get_questions",
    edit:"edit_questions",
    likeAdd:"add_like"
};
const reducer=(state,action)=>{
    switch(action.type){
        case QuestionsAction.get:return action.data;
        case QuestionsAction.likeAdd:
            fetch(`http://localhost:7777/questions/${action.data.id}`,{
                method:"PUT",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(action.data)
            });
            return state.map(el=>{
                if(el.id===action.data.id){
                    return action.data
                }else{
                    return el};
        });
        default: return state;
    }
}
const QuestionsProvider = ({children}) => {
    const [currentQ,setCurrentQ]=useState({
        id: 0,
        creator: 0,
        tema: "",
        question: "",
        likes: 0,
        dislikes: 0,
        modified: false,
        usersliked: [],
        usersdisliked: []
    });
    const [questions,setQuestions]=useReducer(reducer,[]);
    useEffect(()=>{
        fetch(`http://localhost:7777/questions`)
            .then(res=>res.json())
            .then(data=>setQuestions({
                type:QuestionsAction.get,
                data:data
            }));
    },[]);
    return ( 
        <QuestionsContext.Provider
            value={{
                questions,
                setQuestions,
                QuestionsAction,
                currentQ,
                setCurrentQ
            }}
        >
            {children}
        </QuestionsContext.Provider>
     );
}
export {QuestionsProvider};
export default QuestionsContext;