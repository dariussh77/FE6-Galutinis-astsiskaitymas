import { createContext, useEffect, useReducer } from "react";
const AnswerAction={
    get:"get_answers",
    edit:"edit_answer"
};
const AnswersContext= createContext();
const reducer=(state,action)=>{
    switch(action.type){
        case AnswerAction.get:return action.data;
        default: return state;
    }
}
const AnswersProvider = ({children}) => {
    const [answers,setAnswers]=useReducer(reducer,[]);
    useEffect(()=>{
        fetch(`http://localhost:7777/answers`)
        .then(res=>res.json())
        .then(data=>setAnswers({
            type:AnswerAction.get,
            data:data
        }))
    },[]);
    return ( 
        <AnswersContext.Provider
            value={{
                answers,
                setAnswers,
                AnswerAction
            }}
        >
            {children}
        </AnswersContext.Provider>
     );
}
export {AnswersProvider };
export default AnswersContext;