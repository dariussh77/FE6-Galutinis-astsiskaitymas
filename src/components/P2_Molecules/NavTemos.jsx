import NavTema from "../P1_Atoms/NavTema";
import { useContext } from "react";
import TemosContext from "../../contexts/TemosContext";
import QuestionsContext from "../../contexts/QuestionsContext";

const NavTemos = () => {
    const {temos}=useContext(TemosContext);
    const {questions,setQuestions,QuestionsAction}=useContext(QuestionsContext);
    const fRusiuotiMinus=()=>{
        setQuestions({
            type:QuestionsAction.get,
            data:questions.toSorted((a,b)=>b.anwCount-a.anwCount)
        })
        
    };
    const fRusiuotiPlus=()=>{
        setQuestions({
            type:QuestionsAction.get,
            data:questions.toSorted((a,b)=>a.anwCount-b.anwCount)
        })
        
    };
    //console.log('temos: ', temos);
    return ( 
        <div>
            <ul>
                {
                    temos.map(tema=><NavTema
                        key={tema.id}
                        tema={tema.tema}
                        />)
                }
            </ul>
            <button onClick={()=>fRusiuotiMinus()}>Rūšuoti pagal atsakymų skaičių mažyn</button>
            <br />
            <button onClick={()=>fRusiuotiPlus()}>Rūšuoti pagal atsakymų skaičių didyn</button>
        </div>
     );
}
 
export default NavTemos;