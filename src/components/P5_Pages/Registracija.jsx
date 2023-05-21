import { useFormik } from "formik";
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
const Registracija = () => {
    
    const values={
        id: 0,
        userName: "",
        password: "",
        passwordRepeat: "",
        admin: false,
        email: "",
        avatar: "",
        locked: false
    };
    const validationSchema=Yup.object({
        userName: Yup
            .string()
            .min(5, 'Vartotojo vardas, bent 5 simboliai')
            .max(14, 'Vartotojo vardas daugiausiai 14 simbolių')
            .trim()
            .required('Prašom užpildyti laukelį'),
        password: Yup
            .string()
            .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,20}$/,'Slaptaždį privalo sudaryt bent - 8 simboliai, 1 didžioji raidė, 1 mažoji raidė, 1 skaičius, 1 specialusis simbolis(!@#$...)  ')
            .trim()
            .required('Prašom užpildyti laukelį'),
        passwordRepeat: Yup
            .mixed()
            .oneOf([Yup.ref('password'),'Nesutampa slaptažodžiai'])
            .required('Prašom užpildyti laukelį'),
        email: Yup
            .email('Suveskite egzistuojantį el.paštą')
            .required()
            .trim(),
        avatar: Yup 
            .url()
            .trim()
    });
    const formik=useFormik({
        initialValues:values,
        validationSchema:validationSchema,
        onSubmit:(values)=>{
            console.log('veikia');
        }
    })
    return ( 
        <main>
            <form onSubmit={formik.handleSubmit}>

            </form>
        </main>
     );
}
 
export default Registracija;