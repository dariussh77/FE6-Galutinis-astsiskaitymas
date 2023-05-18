import Navmenu from "../P2_Molecules/NavMenu";
import NavTemos from "../P2_Molecules/NavTemos";
import styled from 'styled-components';
const NavCSS=styled.nav`
    position: fixed;
    height: 700px;
    top:115px;
    min-width:250px; 
    background-image: url('https://www.greiciau.lt/kepu/image/cache/catalog/NYPL%C4%96S/naujos%20ivairios/kolonos-tortui-600x315w.png') ;
    background-position: center;
    background-position-y: top;
    background-size: 850px 800px;
`;
const Nav = () => {
    return ( 
        <NavCSS>
            <Navmenu/>
            <hr />
            <NavTemos/>
            <hr />
        </NavCSS>
     );
}
 
export default Nav;