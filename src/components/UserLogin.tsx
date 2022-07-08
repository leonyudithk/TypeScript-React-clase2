import { useState } from 'react';

//Crear el Prototipado
interface Usuario {
    uid: string;
    name: string;
    pass: string;

}

//Inicializar el Prototipado
const userLogeed : Usuario={
    uid: "125AA",
    name: "Yudith Leon",
    pass: "A123456"
}

const UserLogin = () => {

    const [ user, setUser]= useState(userLogeed)

    const handleLogin =(): void =>{
        setUser({
            uid: "123kk",
            name: "Frontend 11",
            pass: "123123"
        }

        )
    }

    return (
        <div>
            <h2>Usuario: useState</h2>
            <button className="btn btn-danger mt-2" onClick={()=> handleLogin()} >Login</button>
        
            {
                (!user)
                ?<pre> No está Autenticado {JSON.stringify(setUser(userLogeed))}</pre>
                :<pre>Bienvenido  {JSON.stringify(user)}</pre>
            }
        </div>
    );
};

export default UserLogin;