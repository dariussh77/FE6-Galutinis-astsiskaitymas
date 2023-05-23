import { createContext, useEffect, useReducer } from "react";
const AnswerAction={
    get:"get_answers",
    edit:"edit_answer",
    create:"create_answer",
    likeAdd:"add_like",
};
const AnswersContext= createContext();
const reducer=(state,action)=>{
    switch(action.type){
        case AnswerAction.get:return action.data;
        case AnswerAction.create:
            fetch(`http://localhost:7777/answers`,{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify(action.data)
            });
            return [...state,action.data ];
        case AnswerAction.likeAdd:
            fetch(`http://localhost:7777/answers/${action.data.id}`,{
                method:"PUT",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(action.data)
            });
            return state.map(el=>{
                if(el.id===action.data.id){ 
                    return action.data
                }else{return el};
        });
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