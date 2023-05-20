import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import UsersContext from '../../contexts/UsersContext';
const HeaderCSS=styled.header`
    z-index: 7;
    position: sticky;
    top:0;
    box-shadow: 0px 10px 7px grey;
    display: flex;
    justify-content: space-between;
    background-image: url('https://www.akmenstata.lt/wp-content/uploads/2021/09/MARMURAS-CALACATTA-EXTRA-BORGHINI.jpg');
    align-items: center;
    padding: 0 20px;
    img{
        width: 77px;
        border-radius: 50px;
    }
    ul{
        display: flex;
        justify-content: space-between;
        list-style: none;
        gap:15px
    }
    a{  
        text-decoration: none;
        color: gold;
        text-shadow: 3px 5px 5px black;
        font-weight: 900;
        transition: 0.5s;
    }
    a:hover{
        font-size: 1.2em;
    }
    li{
        height: 30px;
        width: 100px;
    }
`;
const Header = () => {
    const{loggedIn, setLoggedIn, setShowLogin,setCurrentUser}=useContext(UsersContext);
    const fClickLogin=()=>{
        setShowLogin(true);
    };
    const fClickLogout=()=>{
        setLoggedIn(false);
        setShowLogin(false);
        setCurrentUser({
                id:0,
                userName:"Svečias",
                password:"",
                admin:false,
                email:"",
                avatar:"https://missionvet.ca/wp-content/uploads/2020/01/User-Profile-PNG-1-812x812.png",
                locked:false
        });
    };
    return ( 
        <HeaderCSS>
            <img src="https://www.vle.lt/tmp/vle-images/88320_1.jpg" alt="Sokratas" />
            <div className="menu">
                <ul>
                    <li><NavLink to='/straipsniai'>Straipsniai</NavLink></li>
                    <li><NavLink to='/forumas'>Forumas</NavLink></li>
                    <li><NavLink to='/bendruomene'>Bendruomenė</NavLink></li>
                </ul>
            </div>
            <div className="login">
                <ul>
                    {
                        loggedIn
                        ?<li><NavLink onClick={()=>fClickLogout()}>Atsijungti</NavLink></li>
                        :<li><NavLink onClick={()=>fClickLogin()}>Prisijungti</NavLink></li>
                    }
                   
                    <li><NavLink to='/register'>Registracija</NavLink></li>
                </ul>
            </div>
        </HeaderCSS>
     );
}
 
export default Header;