import React from "react";

export default function Product(props) {
    return (
        <div className='card border-dark'>
            <h5 className='card-header'>{props.product.name}</h5>
            <div className='card-body'>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Cost: {props.product.cost}</li>
                    <li className="list-group-item">Stock: {props.product.stock}</li>
                </ul>
            </div>
        </div>
    )
}