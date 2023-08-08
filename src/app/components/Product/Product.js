import React from "react";
import "./Product.scss";

function Product({src , title , about}) {

    console.log("hello");

    return (
        <div className="product">
            <div className="product-image">
                <img className="img" src={src} alt={title} />
            </div>
            <h1>{title}</h1>
            <p>{about}</p>
        </div>
    );
}

export default Product;
