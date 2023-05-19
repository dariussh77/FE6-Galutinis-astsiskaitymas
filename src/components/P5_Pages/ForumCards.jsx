import { useContext } from "react";
import QuestionsContext from "../../contexts/QuestionsContext";
import QuestionCard from "../P2_Molecules/QuestionCard";

const ForumCards = () => {
    const {questions}=useContext(QuestionsContext);
    //console.log('questions: ', questions);
    return ( 
        <main>
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