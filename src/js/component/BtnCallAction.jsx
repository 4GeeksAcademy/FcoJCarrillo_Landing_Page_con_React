import React from "react";

export const BtnCallAction = () => {
    let btn = {
        back : 'danger',
        text:'Call Actions'
    }
    return(
        <p className="lead">
        <a className={`btn btn-${btn.back} btn-lg`} href="#" role="button">{btn.text}</a>
    </p>
    )
};