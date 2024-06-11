import React from "react";

export const Alert = () => {
    let alert = {
        visible: true,
        back: 'danger',
        text: 'Es una prueba de alerta'
    }
    return (
        <div className={`alert alert-${alert.back} ${alert.visible ? '':'d-none'}`} role="alert">
            {alert.text}
        </div>
    )
};