import { styled } from "styled-components";
const FooterCSS=styled.footer`
    background-image: url('https://www.akmenstata.lt/wp-content/uploads/2021/09/MARMURAS-CALACATTA-EXTRA-BORGHINI.jpg');
    background-size: cover;
    height:40px;
    width: 100vw;
    box-shadow: 0px 0px 20px 0px grey;
    z-index: 4;
`;
const Footer = () => {
    return ( 
        <FooterCSS>
            Footeris
        </FooterCSS>
     );
}
 
export default Footer;