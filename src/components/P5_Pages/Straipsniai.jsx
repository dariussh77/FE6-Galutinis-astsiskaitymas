import { useContext } from "react";
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
    .listing{
        display: flex;
        gap: 30px;
        position: fixed;
        left:500px;
        top:150px;
        opacity: 50%;
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
            loggedIn&&!straipsniai[strNr].usersliked.includes(currentUser.id)&&!straipsniai[strNr].usersdisliked.includes(currentUser.id)
                ?setStraipsniai({
                    type:StraipsniaiAction.likeAdd,
                    data:{...straipsniai[strNr],
                    likes:(straipsniai[strNr].likes+1),
                    dislikes:(straipsniai[strNr].dislikes),
                    usersliked:[...straipsniai[strNr].usersliked,currentUser.id],
                    usersdisliked:straipsniai[strNr].usersdisliked.filter(e=>e!==currentUser.id)
                }})
                :loggedIn&&!straipsniai[strNr].usersliked.includes(currentUser.id)&&straipsniai[strNr].usersdisliked.includes(currentUser.id)
                ?setStraipsniai({
                    type:StraipsniaiAction.likeAdd,
                    data:{...straipsniai[strNr],
                    likes:(straipsniai[strNr].likes+1), 
                    dislikes:(straipsniai[strNr].dislikes-1), 
                    usersliked:[...straipsniai[strNr].usersliked,currentUser.id],
                    usersdisliked:straipsniai[strNr].usersdisliked.filter(e=>e!==currentUser.id)
                }})
                :loggedIn&&straipsniai[strNr].usersliked.includes(currentUser.id)?alert('Jau balsavote'):alert('Esate neprisijungęs');
    };
    const fAddDislike=()=>{
            loggedIn&&!straipsniai[strNr].usersdisliked.includes(currentUser.id)&&!straipsniai[strNr].usersliked.includes(currentUser.id)
                ?setStraipsniai({
                    type:StraipsniaiAction.likeAdd,
                    data:{...straipsniai[strNr],
                    dislikes:(straipsniai[strNr].dislikes+1), 
                    likes:(straipsniai[strNr].likes), 
                    usersdisliked:[...straipsniai[strNr].usersdisliked,currentUser.id],
                    usersliked:straipsniai[strNr].usersliked.filter(e=>e!==currentUser.id)
                }})
                :loggedIn&&!straipsniai[strNr].usersdisliked.includes(currentUser.id)&&straipsniai[strNr].usersliked.includes(currentUser.id)
                ?setStraipsniai({
                    type:StraipsniaiAction.likeAdd,
                    data:{...straipsniai[strNr],
                    dislikes:(straipsniai[strNr].dislikes+1), 
                    likes:(straipsniai[strNr].likes-1), 
                    usersdisliked:[...straipsniai[strNr].usersdisliked,currentUser.id],
                    usersliked:straipsniai[strNr].usersliked.filter(e=>e!==currentUser.id)
                }})
                :loggedIn&&straipsniai[strNr].usersdisliked.includes(currentUser.id)?alert('Jau balsavote'):alert('Esate neprisijungęs');
    };

    return (
        <>
            {
                straipsniai[0]?
                <MainStrCSS>
                    <div className="thumbs">
                        <i onClick={()=>fAddLike()} className="bi bi-hand-thumbs-up">{straipsniai[strNr].likes}</i>
                        <i onClick={()=>fAddDislike()} className="bi bi-hand-thumbs-down"> {straipsniai[strNr].dislikes}</i>
                    </div>
                    <div className="straipsnis">
                        <img src={straipsniai[strNr].img_src} alt="OO" />
                        <h2>{straipsniai[strNr].name}</h2>
                        <p>{straipsniai[strNr].straipsnis}</p>
                    </div>
                    <div className="listing">
                        <button onClick={()=>fAnkstesnis()}>&#60;&#60;Ankstesnis</button>
                        <button onClick={()=>fSekantis()}>Sekantis&#62;&#62;</button>
                    </div> 
                </MainStrCSS>:<h1>...loading</h1>
            }
        </>
     );
}
 
export default Straipsniai;