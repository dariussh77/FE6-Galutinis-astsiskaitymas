import Navmenu from "../P2_Molecules/NavMenu";
import NavTemos from "../P2_Molecules/NavTemos";
import styled from 'styled-components';
import NavLogin from "../P2_Molecules/NavLogin";
const NavCSS=styled.nav`
    z-index: -1;
    position: fixed;
    height: calc(100vh);
    top:80px;
    min-width:250px; 
    background-image: url('https://www.greiciau.lt/kepu/image/cache/catalog/NYPL%C4%96S/naujos%20ivairios/kolonos-tortui-600x315w.png') ;
    background-position: center;
    background-position-y: top;
    background-size: 890px auto;
`;
const Nav = () => {
    return ( 
        <NavCSS>
            <NavLogin/>
            <hr />
            <Navmenu/>
            <hr />
            <NavTemos/>
            <hr />
        </NavCSS>
     );
}
 
export default Nav;