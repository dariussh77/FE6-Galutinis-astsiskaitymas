import { useContext } from "react";
import { useFormik } from "formik";
import UsersContext from "../../contexts/UsersContext";

const NavLogin = () => {
    const {users,setUsers,setCurrentUser,currentUser,loggedIn,setLoggedIn}=useContext(UsersContext);
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
                alert('Prisijunkta');
            }else{alert('Blogi kredincialai')};
        }
    });
    

    //console.log('currentUser: ', currentUser);
    return ( 
        <div>
            <form onSubmit={formik.handleSubmit}>
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
            </form>
            
        </div>
     );
}
 
export default NavLogin;