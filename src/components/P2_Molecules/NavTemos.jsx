import NavTema from "../P1_Atoms/NavTema";
import { useContext } from "react";
import TemosContext from "../../contexts/TemosContext";

const NavTemos = () => {
    const {temos}=useContext(TemosContext);
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
        </div>
     );
}
 
export default NavTemos;