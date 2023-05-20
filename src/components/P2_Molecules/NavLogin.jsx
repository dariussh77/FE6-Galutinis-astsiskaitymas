import { useContext } from "react";
import { useFormik } from "formik";
import UsersContext from "../../contexts/UsersContext";
import styled from 'styled-components';
const LoginDivCSS=styled.div`
    height: 100px;
    >div{
        padding: 20px;
        display: flex;
        gap:20px;
        >img{
            width: 50px;
            height: 50px;
            border-radius: 25px;
            box-shadow: 10px 10px 10px grey;
        } 
    }   
`;

const NavLogin = () => {
    const {users,setUsers,setCurrentUser,currentUser,loggedIn,setLoggedIn,showLogin,setShowLogin}=useContext(UsersContext);
    const values={
        userName:'',
        password:''
    };
    const formik=useFormik({
        initialValues:values,
        onSubmit:(values)=>{
            //console.log('values: ', values);
            if(users.find(e=>e.userName===values.userName)&&users.find(e=>e.password===values.password)){
                setCurrentUser(users.find(e=>e.userName===values.userName));
                setLoggedIn(true);
                setShowLogin(false);
            }else{alert('Blogi kredincialai')};
        }
    });
    const fAtsisakyti=()=>{
        setShowLogin(false);
    }
    //console.log('currentUser: ', currentUser);
    return ( 
        <LoginDivCSS>
            { 
                !showLogin
                    ?<div>
                        <img src={currentUser.avatar} alt={currentUser.userName} />
                        <h4>{currentUser.userName}</h4>
                    </div>
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
                        <button onClick={()=>fAtsisakyti()}>Atsisakyti</button>
                    </form>  
            }
        </LoginDivCSS>
     );
}
 
export default NavLogin;