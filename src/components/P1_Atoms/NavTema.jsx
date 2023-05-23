import { useContext,useEffect } from "react";
import QuestionsContext from "../../contexts/QuestionsContext";
import { useNavigate } from "react-router-dom";


const NavTema = ({tema}) => {
    const navigate=useNavigate();
    
    const {questions,setQuestions,QuestionsAction}=useContext(QuestionsContext);
    const fFilterTema=()=>{
        tema==='VISOS TEMOS'
        ?fetch(`http://localhost:7777/questions`)
            .then(res=>res.json())
            .then(data=>setQuestions({
                type:QuestionsAction.get,
                data:data
        }))
        :fetch(`http://localhost:7777/questions`)
            .then(res=>res.json())
            .then(data=>setQuestions({
                type:QuestionsAction.get,
                data:data.filter(el=>el.tema===tema)
            })); 
        navigate('/forumas');
    };
    
    return ( 
        <li onClick={()=>fFilterTema()}>{tema}</li>
     );
}
 
export default NavTema;