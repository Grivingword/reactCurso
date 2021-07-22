import { useForm } from "../hooks/useForm";

interface Formulario2 {
    code: string,
    sale: string
}
export const Formulario2 = () =>{

    const {code, sale, formulario, handleChange} = useForm<Formulario2>({
        code: '2135',
        sale: '12.5'
    });

    // const {code, sale } = formulario;
//     const [formulario, setFormulario] = useState({
//         code: '',
//         sale: ''
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
               <label className="form-label">Code: </label>
               <input type="text"
                      className="form-control"
                      name="code" onChange={ handleChange } value={code} />
               <label className="form-label">Sale: </label>
               <input type="text"
                      className="form-control"
                      name="sale" onChange={ handleChange } value={sale}/>
           </div>

           <pre>{JSON.stringify(formulario)}</pre>
       </form>
    )
}
