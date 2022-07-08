import { useState } from "react";
import Times from "./Times";

const TimesPadre = () => {
    const [miliseg, setMiliseg] = useState(500)
    return (
        <div>
             <div>
            <h1> Milisegundos: {miliseg}</h1>
            <div>
            <button className="btn btn-primary mt-2" onClick={()=> setMiliseg(1000)}>1 seg</button>
            <button className="btn btn-warning mt-2" onClick={()=> setMiliseg(2000)}>2 seg</button>
            <Times milisegundos= {miliseg}/>
            </div>
        </div>
        </div>
    );
};

export default TimesPadre;