import { styled } from "styled-components";
const FooterCSS=styled.footer`
    background-image: url('https://www.tylikalva.lt/granitas-g603_prekesbig374.jpg');
    min-height:60px;
    width: 100vw;
    background-color: aquamarine;
    position: fixed;
    bottom: 0;
`;
const Footer = () => {
    return ( 
        <FooterCSS>
            Footeris
        </FooterCSS>
     );
}
 
export default Footer;