import { useContext, useEffect } from "react";
import StraipsniaiContext from "../../contexts/StraipsniaiContext";
import styled from 'styled-components';
import UsersContext from "../../contexts/UsersContext";
const MainStrCSS=styled.main`
position: relative;
    img{
        width:100%;
    };
    p{
        white-space: pre-wrap;
        text-align: justify;
    } 
    .thumbs{
        display: flex;
        justify-content: center;
        align-items:center;
        position: fixed;
        border-radius: 25px;
        left:300px;
        top:150px;
        height: 30px;
        width:100px;
        background-color: gold;
        gap:20px;
    }
`;
const Straipsniai = () => {
    const {currentUser,loggedIn}=useContext(UsersContext);
    console.log('currentUser: ', currentUser.id);
    const {straipsniai,strNr,setStrNr,StraipsniaiAction,setStraipsniai}=useContext(StraipsniaiContext);
    const fSekantis=()=>{
        strNr!==0?setStrNr(strNr-1):setStrNr(straipsniai.length-1);
    };
    const fAnkstesnis=()=>{
        strNr!==straipsniai.length-1?setStrNr(strNr+1):setStrNr(0);
    };
    const fAddLike=()=>{
        loggedIn&&!straipsniai[strNr].votedUser.includes(currentUser.id)
        ?setStraipsniai({
            type:StraipsniaiAction.likeAdd,
            data:{...straipsniai[strNr],
            likes:(straipsniai[strNr].likes+1), 
            votedUser:[...straipsniai[strNr].votedUser,currentUser.id]}
        })
        :loggedIn&&straipsniai[strNr].votedUser.includes?alert('Jau balsavote'):alert('Esate neprisijungęs')

    };
    return (
        <>
            {
                straipsniai[0]?
                <MainStrCSS>
                    <div className="thumbs">
                        <i onClick={()=>fAddLike()} className="bi bi-hand-thumbs-up">{straipsniai[strNr].likes}</i>
                        <i className="bi bi-hand-thumbs-down"> {straipsniai[strNr].dislikes}</i>
                    </div>
                    <div className="straipsnis">
                        <img src={straipsniai[strNr].img_src} alt="OO" />
                        <h2>{straipsniai[strNr].name}</h2>
                        <p>{straipsniai[strNr].straipsnis}</p>
                    </div>
                    <div className="listing">
                        <button onClick={()=>fAnkstesnis()}>Ankstesnis</button>
                        <button onClick={()=>fSekantis()}>Sekantis</button>
                    </div> 
                </MainStrCSS>:<h1>...loading</h1>
            }
        </>
     );
}
 
export default Straipsniai;