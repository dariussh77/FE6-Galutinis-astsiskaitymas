import { useContext, useState } from "react";
import StraipsniaiContext from "../../contexts/StraipsniaiContext";
import styled from 'styled-components';
const MainStrCSS=styled.main`
    img{
        height: 200px;
    }   
`;
const Straipsniai = () => {
    
    const{straipsniai}=useContext(StraipsniaiContext);
    /* console.log('straipsniai: ', straipsniai); */
    const [strNr,setStrNr]=useState(straipsniai.length-1);
    const fSekantis=()=>{
        strNr!==0?setStrNr(strNr-1):setStrNr(straipsniai.length-1);
    };
    const fAnkstenis=()=>{
        strNr!==straipsniai.length-1?setStrNr(strNr+1):setStrNr(0);
    };
    return ( 
        <MainStrCSS>
            <div>
                <img src={straipsniai[strNr].img_src} alt="OO" />
                <h2>{straipsniai[strNr].name}</h2>
                <p>{straipsniai[strNr].straipsnis}</p>
            </div>
            <div>
                <button onClick={()=>fAnkstenis()}>Ankstesnis</button>
                <button onClick={()=>fSekantis()}>Sekantis</button>
            </div>
            
        </MainStrCSS>
     );
}
 
export default Straipsniai;