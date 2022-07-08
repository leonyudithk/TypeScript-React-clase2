import { useEffect, useState } from "react";

interface TimesArg{
    milisegundos: number
}

const Times = ({milisegundos}: TimesArg) => {
    const [seg, setSeg]= useState(0)

    console.log(milisegundos)

    useEffect(()=>{
        console.log('Entre al UseEffect')
        setSeg(0)
        
    },[milisegundos])

    return (
        <div>
          <h1>Tiempo <span>{seg}</span></h1>
        </div>
    );
};

export default Times;