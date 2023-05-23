import { styled } from "styled-components";
const FooterCSS=styled.footer`
    background-image: url('https://www.akmenstata.lt/wp-content/uploads/2021/09/MARMURAS-CALACATTA-EXTRA-BORGHINI.jpg');
    background-size: cover;
    height:40px;
    width: 100vw;
    box-shadow: 0px 0px 20px 0px grey;
    display: flex;
    justify-content: center;
    align-items: center;
    color:gold;
`;
const Footer = () => {
    return ( 
        <FooterCSS>
            All Wrigts Reserved @
        </FooterCSS>
     );
}
 
export default Footer;