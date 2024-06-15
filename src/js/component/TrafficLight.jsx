import React, {useState} from "react";


export const TrafficLight = () =>{

    const [color,setColor] = useState('')


    return(
        <div className="container d-flex justify-content-around mb-5">
            <div className={`col2 btn btn-success ${color == 'verde' ? 'glow-green': ''}`}
            onClick={() =>setColor('verde')} rounded-circle>Verde</div>
            <div className={`col2 bg-warning ${color == 'amarillo' ? 'glow-yellow': ''}`} onClick={() =>setColor('amarillo')}>Amarillo</div>
            <div className={`col2 bg-danger ${color == 'rojo' ? 'glow-red': ''}`} onClick={() =>setColor('rojo')}>Rojo</div>
        </div>
    );
}