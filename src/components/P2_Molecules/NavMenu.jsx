import { NavLink } from "react-router-dom";
const Navmenu = () => {
    return ( 
        <div className="menu">
            <ul>
                <li><NavLink to='/straipsniai'>Straipsniai</NavLink></li>
                <li><NavLink to='/forumas'>Forumas</NavLink></li>
                <li><NavLink to='/bendruomene'>Bendruomenė</NavLink></li>
            </ul>
        </div>
     );
}
 
export default Navmenu;