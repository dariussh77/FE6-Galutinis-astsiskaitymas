import { useContext } from "react";
import StraipsniaiContext from "../../contexts/StraipsniaiContext";
import styled from 'styled-components';
const MainStrCSS=styled.main`
    margin-top: 50px;
    img{
        height: 200px;
    };
    p{
        white-space: pre-wrap;
        text-align: justify;
    } 
`;
const Straipsniai = () => {
    const {straipsniai,strNr,setStrNr}=useContext(StraipsniaiContext);
    const fSekantis=()=>{
        strNr!==0?setStrNr(strNr-1):setStrNr(straipsniai.length-1);
    };
    const fAnkstesnis=()=>{
        strNr!==straipsniai.length-1?setStrNr(strNr+1):setStrNr(0);
    };
    return (
        <>
            {
                straipsniai[0]?
                <MainStrCSS>
                    <div>
                        <img src={straipsniai[strNr].img_src} alt="OO" />
                        <h2>{straipsniai[strNr].name}</h2>
                        <p>{straipsniai[strNr].straipsnis}</p>
                    </div>
                    <div>
                        <button onClick={()=>fAnkstesnis()}>Ankstesnis</button>
                        <button onClick={()=>fSekantis()}>Sekantis</button>
                    </div> 
                </MainStrCSS>:<h1>...loading</h1>
            }
        </>
     );
}
 
export default Straipsniai;