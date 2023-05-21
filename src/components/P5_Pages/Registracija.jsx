import { useFormik } from "formik";
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
const Registracija = () => {

    const values={
        id: uuidv4(),
        userName: "",
        password: "",
        passwordRepeat: "",
        admin: false,
        email: "",
        avatar: "https://png.pngtree.com/png-vector/20190805/ourlarge/pngtree-account-avatar-user-abstract-circle-background-flat-color-icon-png-image_1650938.jpg",
        locked: false
    };
    const validationSchema=Yup.object({
        userName: Yup
            .string()
            .min( 5, '(Vartotojo vardas, bent 5 simboliai!!!)')
            .max( 14, '(Vartotojo vardas daugiausiai 14 simbolių!!!)')
            .trim()
            .required('(Prašom užpildyti laukelį!!!)'),
        password: Yup
            .string()
            .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,20}$/,'(Slaptaždį privalo sudaryt bent - 8 simboliai, 1 didžioji raidė, 1 mažoji raidė, 1 skaičius, 1 specialusis simbolis(!@#$...)!!!)  ')
            .trim()
            .required('(Prašom užpildyti laukelį!!!)'),
        passwordRepeat: Yup
            .mixed()
            .oneOf([Yup.ref('password')],'(Nesutampa slaptažodžiai!!!)')
            .required('(Prašom užpildyti laukelį!!!)'),
        email: Yup
        .string()
            .email('(Suveskite egzistuojantį el.paštą!!!)')
            .required('(Prašom užpildyti laukelį!!!)')
            .trim(),
        avatar: Yup
            .string()
            .url('(Netinkamas URL arba palikite siūlomą)')
            .trim()
    });
    const formik=useFormik({
        initialValues: values,
        onSubmit:(values)=>{
            console.log(values);
        },
        validationSchema: validationSchema,
    });
    return ( 
        <main>
            <h1>Registruokitės:</h1>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="userName">*Vartotojo vardas: </label>
                    <input 
                    type="text" id="userName" name="userName"
                    value={formik.values.userName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                    {
                        formik.touched.userName&&formik.errors.userName&&<i> {formik.errors.userName}</i>
                    }
                </div>
                <div>
                    <label htmlFor="password">*Slaptažodis: </label>
                    <input 
                    type="password" id="password" name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                    {
                        formik.touched.password&&formik.errors.password&&<i> {formik.errors.password}</i>
                    }
                </div>
                <div>
                    <label htmlFor="passwordRepeat">*Pakartoti slaptažodį: </label>
                    <input 
                    type="password" id="passwordRepeat" name="passwordRepeat"
                    value={formik.values.passwordRepeat}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                    {
                        formik.touched.passwordRepeat&&formik.errors.passwordRepeat&&<i> {formik.errors.passwordRepeat}</i>
                    }
                </div>
                <div>
                    <label htmlFor="email">*Suveskite el.paštą: </label>
                    <input 
                    type="email" id="email" name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                    {
                        formik.touched.email&&formik.errors.email&&<i> {formik.errors.email}</i>
                    }
                </div>
                <div>
                    <label htmlFor="avatar">Avataro URL(neprivaloma): </label>
                    <input 
                    type="url" id="avatar" name="avatar"
                    value={formik.values.avatar}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                    {
                        formik.touched.avatar&&formik.errors.avatar&&<i> {formik.errors.avatar}</i>
                    }
                </div>
                <div>
                    <div>
                        <input 
                        type="checkbox" id="admin" name="admin"
                        value={formik.values.admin}
                        onChange={formik.handleChange}                        
                        onBlur={formik.handleBlur}
                        />
                        <label htmlFor="admin">admin</label>
                    </div>
                </div>
                <p>* Privalomi laukeliai.</p>
                <input type="submit" value='Registruotis'/>
            </form>
        </main>
     );
}
 
export default Registracija;