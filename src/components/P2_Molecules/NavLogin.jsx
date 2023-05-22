import { useContext } from "react";
import { useFormik } from "formik";
import UsersContext from "../../contexts/UsersContext";
import styled from 'styled-components';
import { compareSync } from "bcryptjs";
import { useNavigate } from "react-router-dom";
const LoginDivCSS=styled.div`
    height: 100px;
    >div{
        padding: 20px;
        display: flex;
        gap:20px;
        align-items: center;
        >img{
            width: 50px;
            height: 50px;
            border-radius: 25px;
            box-shadow: 10px 10px 10px grey;
            cursor: pointer;
        }
        button{
            height: 20px;
            border-radius: 10px;
        }
        h4{
           cursor: pointer; 
        }
    } 
`;
const NavLogin = () => {
    const {users,setCurrentUser,currentUser,setLoggedIn,showLogin,setShowLogin,loggedIn}=useContext(UsersContext);
    const navigate=useNavigate();
    const fClickLogOut=()=>{
        navigate('/');
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
    const values={
        userName:'',
        password:''
    };
    const formik=useFormik({
        initialValues:values,
        onSubmit:(values)=>{
            if(
            users.find(e=>e.userName===values.userName)
            &&compareSync(values.password,users.find(e=>e.userName===values.userName).password)
            &&!users.find(e=>e.userName===values.userName).locked){
                setCurrentUser(users.find(e=>e.userName===values.userName));
                setLoggedIn(true);
                setShowLogin(false);
            }else if(users.find(e=>e.userName===values.userName)&&users.find(e=>e.userName===values.userName).locked){
                alert('Vartotojas deaktyvuotas')
            }else{alert('Blogi kredincialai')};
        }
    });
    return ( 
        <LoginDivCSS>
            { 
                !showLogin
                    ?<>
                        <div  className="prisijungta">
                            <img onClick={()=>setShowLogin(true)} src={currentUser.avatar} alt={currentUser.userName} />
                            <h4 onClick={()=>setShowLogin(true)}>{currentUser.userName}</h4>
                            {loggedIn&&<button onClick={()=>fClickLogOut()}>Atsijungti</button>}
                            {!loggedIn&&<button onClick={()=>setShowLogin(true)}>Prisijungti</button>}
                        </div>
                        
                    </>
                    :<form onSubmit={formik.handleSubmit}>
                        <div>
                            <label htmlFor="userName">Vartotojas</label>
                            <input 
                                type="text" 
                                id="userName" name="userName" 
                                value={formik.values.userName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Slaptažodis</label>
                            <input 
                                type="password" 
                                id="password" name="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                        <input type="submit" value='Prisijungti'/>
                        <button onClick={()=>setShowLogin(false)}>Atsisakyti</button>
                    </form>  
            }
        </LoginDivCSS>
     );
}
 
export default NavLogin;