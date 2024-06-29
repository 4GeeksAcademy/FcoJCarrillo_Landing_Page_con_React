import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navabar.jsx";
import { Card } from "./component/Card.jsx";
import { Alert } from "./component/Alert.jsx";
import { Error404 } from "./component/Error404.jsx";
import { TrafficLight } from "./component/TrafficLight.jsx";


const Layout= () =>{

    return (
        <div className="container">
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route element={<Card/>} path='/'/>
                    <Route element={<Alert/>} path='/'/>
                    <Route element={<TrafficLight/>} path='/TrafficLight'/>
                    <Route element={<Error404/>} path="*"/>
                </Routes>

            </BrowserRouter>
        </div>
    )
}

export default Layout;