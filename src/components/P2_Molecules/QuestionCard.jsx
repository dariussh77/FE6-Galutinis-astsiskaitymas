import styled from 'styled-components';
const CardCSS = styled.div`
    display: flex;
`; 
const QuestionCard = ({question}) => {
    return ( 
        <CardCSS>
            <img src="" alt="User" />
            <h3>{question.question}</h3>
            <h5>{question.tema}</h5>

        </CardCSS>
     );
}
 
export default QuestionCard;