import { createContext, useEffect, useReducer, useState } from "react";

const QuestionsContext=createContext();
const QuestionsAction={
    get:"get_questions",
    edit:"edit_questions"
};
const reducer=(state,action)=>{
    switch(action.type){
        case QuestionsAction.get:return action.data;
        default: return state;
    }
}
const QuestionsProvider = ({children}) => {
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
            }}
        >
            {children}
        </QuestionsContext.Provider>
     );
}
export {QuestionsProvider};
export default QuestionsContext;