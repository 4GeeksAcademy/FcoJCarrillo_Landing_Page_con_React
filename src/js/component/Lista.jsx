import React, { useState } from "react";


export const Lista = () => {
    //Controlar el input
    //useState se utiliza para controlar los estados dentro de un formatio etc
    
    const [task, setTasck] = useState('');
    const [todos, setTodos] = useState(['tarea 1', 'tarea 2']);

    const handleSubmit = (event) => {
        event.preventDefault();
    }
    return (
        <div className="container">
            <h1>Escribe una tarea</h1>
            <form className="justify-content-center" onSumbmit={handleSubmit}>
                <div className="row d-flex justify-content-center">
                    <input type="text" className="form-control" id="exampleInputEmail1" value={task} onChange={(event)=> setTasck(event.target.value)}/>
                </div>
                <div className="row d-flex justify-content-center">
                    <ul className="list-group col-xs-3 col-md-6">
                        <li className="list-group-item">Hola</li>
                    </ul>
                </div>
            </form>
        </div>
    )
}