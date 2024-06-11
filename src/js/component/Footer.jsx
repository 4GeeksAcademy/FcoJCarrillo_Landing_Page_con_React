import React from "react";

export const Footer = () => {
    Console.log("Footer");
    let cohorte = 'Spain 72';
    /* Fragment
<>
</>*/
    return (
        <>
            <a href="#" className="btn btn-success" >
                If you see this green button... bootstrap is working...
            </a >
            <p>
                Made by{" "}
                <a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
                love! for {cohorte}
            </p>
        </>
    );
};
