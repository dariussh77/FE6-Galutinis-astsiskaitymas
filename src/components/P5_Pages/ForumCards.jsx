import { useContext } from "react";
import QuestionsContext from "../../contexts/QuestionsContext";
import QuestionCard from "../P2_Molecules/QuestionCard";
import TemosContext from "../../contexts/TemosContext";

const ForumCards = () => {
    const {questions}=useContext(QuestionsContext);
    const {currentTema}=useContext(TemosContext);
    //console.log('questions: ', questions);
    return ( 
        <main>
            <h1>{currentTema?currentTema.toUpperCase():<>VISOS TEMOS</>}</h1>
            {
                questions.map(question=><QuestionCard
                    key={question.id}
                    question={question}

                />)
            }
        </main>
     );
}
 
export default ForumCards;