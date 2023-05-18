import NavTema from "../P1_Atoms/NavTema";
import { useContext } from "react";
import TemosContext from "../../contexts/TemosContext";

const NavTemos = () => {
    const {temos}=useContext(TemosContext);
    return ( 
        <div>
            <ul>
                
                <NavTema/>
            </ul>
        </div>
     );
}
 
export default NavTemos;