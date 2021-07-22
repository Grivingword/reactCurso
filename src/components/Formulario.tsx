import { useForm } from "../hooks/useForm";

interface Formulario {
    email: string,
    password: string
}
export const Formulario = () =>{

    const {email, password, formulario, handleChange} = useForm<Formulario>({
        email: 'osvaldo@gmail.com',
        password: '12345'
    });

    // const {email, password  } = formulario;
//     const [formulario, setFormulario] = useState({
//     email: '',
//     password: ''
// });
//
// const handleChange = ({target}: ChangeEvent<HTMLInputElement>) =>{
//     const {name, value} = target;
//
//     setFormulario({
//        ...formulario,
//         [name]: value
//     });
//     console.log(name, value);
// }

    return(
       <form autoComplete="off">
           <div className="mb-3">
               <label className="form-label">Email: </label>
               <input type="email"
                      className="form-control"
                      name="email"
                      onChange={ handleChange } value={email}/>
               <label className="form-label">Password: </label>
               <input type="password"
                      className="form-control"
                      name="password"
                      onChange={ handleChange } value={password} />
           </div>

           <pre>{JSON.stringify(formulario)}</pre>
       </form>
    )
}
