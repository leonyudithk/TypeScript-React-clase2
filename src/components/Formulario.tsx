import { useForm } from "./Hooks/useForm";

interface FormData{
    name: string;
    email: string;
    pass: string;
}

const Formulario = () => {

    const {name, email, pass, formulario, handleChange} = useForm<FormData>({
        name: "ANA",
        email: "ana@gmail.com",
        pass: "123123"

    })

    console.log(formulario)
    return (
        <div>
            <form>
                <div className="mb-3">
                    <label>Name</label>
                    <input type="text"
                     name="name" 
                     value={name}
                      placeholder="Ingrese un Nombre" 
                      onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label>Email</label>
                    <input type="email"
                     name="email" 
                     value={email}
                      placeholder="Ingrese un email" 
                      onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input type="text"
                     name="pass" 
                    value={pass}
                      placeholder="Ingrese una clave" 
                      onChange={handleChange}/>
                </div>
            </form>
        </div>
    );
};

export default Formulario;