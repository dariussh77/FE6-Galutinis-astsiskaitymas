import { useContext } from "react";
import QuestionsContext from "../../contexts/QuestionsContext";
import QuestionCard from "../P2_Molecules/QuestionCard";
import TemosContext from "../../contexts/TemosContext";
import { useFormik } from "formik";
import { v4 as uuidv4 } from 'uuid';
import UsersContext from "../../contexts/UsersContext";
import TemaSelect from "../P1_Atoms/TemaSelect";
import { styled } from "styled-components";
const MainQCardsCss=styled.main`
    form{
        .textQuestion{
            display: flex;
        }
    }  
`;


const ForumCards = () => {
    const {questions,setQuestions,QuestionsAction}=useContext(QuestionsContext);
    const {currentTema,temos}=useContext(TemosContext);
    const {currentUser,loggedIn}=useContext(UsersContext);
    const initialValues={
        id: 0,
        creator: 0,
        tema: "",
        question: "",
        likes: 0,
        dislikes: 0,
        modified: false,
        usersliked: [],
        usersdisliked: [],
        anwCount: 0
    }
    const formik=useFormik({
        initialValues:initialValues,
        onSubmit:(values,actions)=>{
            console.log('values: ', values);
            setQuestions({
                type:QuestionsAction.add,
                data:{
                    id: uuidv4(),
                    creator: currentUser.id,
                    tema: values.tema,
                    question: values.question,
                    likes: 0,
                    dislikes: 0,
                    modified: false,
                    usersliked: [],
                    usersdisliked: [],
                    anwCount: 0
                }
            })
        }
    });
    //console.log('questions: ', questions);
    return ( 
        <MainQCardsCss>
            <h1>{currentTema?currentTema.toUpperCase():<>VISOS TEMOS</>}</h1>
            {
                questions.map(question=><QuestionCard
                    key={question.id}
                    question={question}

                />)
            }
            {
            loggedIn?
                <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
                    <div>
                        <label htmlFor="tema">Pasirinkite temą: </label>
                        <select 
                            name="tema" id="tema"
                            value={formik.values.tema}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        >
                            {
                                temos.map(tema=><TemaSelect
                                    key={tema.id}
                                    tema={tema.tema}
                                />)
                            }
                        </select>
                    </div>
                    <div className="textQuestion">
                        <label htmlFor="question">Užduokite klausimą: </label>
                        <textarea 
                            name="question" id="question" 
                            cols="100" rows="2"
                            value={formik.values.question}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        ></textarea>
                        <input type="submit" value="Patvirtinkite" />
                    </div>
                </form>
                :<p>Prisijunkite arba registruokitės, kad galėtumėt kurti Klausimus...</p>
            }
        </MainQCardsCss>
     );
}
 
export default ForumCards;