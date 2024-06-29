import React, { useEffect, useState } from "react";
import { Spinner } from "./Spinner";


export const UsersJPH = () =>{
    //0.Definiendo la dirección del host
    const host = 'https://jsonplaceholder.typicode.com/'
    const [users, setUsers] = useState([]);

    //1. Defino una función ayncrona para consumir la API
    const getUsers = async () =>{
        //2.DEFINO LA URL
        // const uri = 'https://jsonplaceholder.typicode.com/'+'/users';
        const uri = `${host}/users`;
        //3.Defino la uri del fetch()
        const options = {
            method: 'GET'
        };
        //4.espero(aeait)recibir el objeto 'response' que me devuelve el fetch()
        const response = await fetch(uri, options);
        //5.Valido si el fetch me devolvió un error
        if(!response.ok){
            //5.1.Trato el error, genero una lógica del error
            console.log('Error:',response.status, response.statusText);
            //5.2. Salgo un return para no ejecute las sisguiente lineas
            return
            //ejecuta hasta el return
        }
        //Guardo los datos de una variable los datos de tipo json que me devuelve la APIA       
        const data= await response.json()
        //6. Trato los datos que me devuelve la API, genero lógica
        console.log(data);
        setUsers(data)
        return data
    }
    //forma de cargar los datos al principio sin llamar a ningún boton ni nada
    useEffect(()=>{
        getUsers();
    },[])

    return(
        <div className="container">
            API
            <button type="button" onClick={getUsers} className="btn btn-primary">Submit</button>
            {users ? <Spinner/>
            : 
                <ul className="list-group">
               {users.map((item)=>
                    <li key={item.id} className="list-group-item">{item.name}</li>)
                }
                </ul>
}
        </div>
    )
}