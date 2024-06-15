import React, { useState } from "react";


export const ExampleUseState = () => {
    console.log("")
    /*
    A-->Es el nombre de una nueva variable
    B-->Va a ser la función que modificará el valor de A
    C-->HOOKS()
    D-->El valor inicial de la variable definida en 'a'
    */
    const [cohorte, setCohorte] = useState('Spain 72', 'Soy javi');
    //      a       b           c           d
    console.log(cohorte);
    //cohorte = 'Hola mundo' Así no se puede asignar un valor nuevo nunca con React
    const [number, setnumber] = useState(0)
    const [background, setBackground] = useState('alert alert-info display-1');

    function mayuscula() { setCohorte(cohorte.toUpperCase()); }
    function minuscula() { setCohorte(cohorte.toLowerCase()); }

    function changeBackground(color){
        setBackground(`alert alert-${color} display-1`)
    }

    return (
        <div className="container">
            <h1>{cohorte}- {number}</h1>
            <div class={background} role="alert">
                This is a primary alert—check it out!
            </div>
            <div className="btn-group mb-1" role="group" aria-label="Basic example">
                <button onClick={mayuscula} type="button" className="btn btn-secondary">Mayúscula</button>
                <button onClick={minuscula} type="button" className="btn btn-secondary">Minúscula</button>
                <button onClick={mayuscula} type="button" className="btn btn-secondary">Right</button>
            </div>

            <div className="btn-group mb-5" role="group" aria-label="Basic example">
                <button onClick={() => setnumber(number + 1)} type="button" className="btn btn-secondary">Incrementar</button>
                <button onClick={() => setnumber(number - 1)} type="button" className="btn btn-secondary">Decrementar</button>
                <button onClick={() => setnumber(number * 2)} type="button" className="btn btn-secondary">Duplicar</button>
            </div>


            <div className="btn-group mb-5" role="group" aria-label="Basic example">
                <button onClick={() => changeBackground('info')} type="button" className="btn btn-secondary">Azul</button>
                <button onClick={() => changeBackground('sucess')} type="button" className="btn btn-secondary">Verde</button>
                <button onClick={() => changeBackground('warning')} type="button" className="btn btn-secondary">Rojo</button>
            </div>
        </div>
    );
};