import React from "react";
import image from '../../img/IMG_20240605_133541.jpg'
export const Card = () => {
    return (
        <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src={image} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
        </div>
    );
};