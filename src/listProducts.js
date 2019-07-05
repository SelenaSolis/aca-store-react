import React from 'react';
import './productStyles.css';

function ListProducts(props){
    return(
        <div className = 'products'>
            <img src = {props.image} alt = {props.image}/>
            <h3>{props.name}</h3>
            <h5>{props.description}</h5>
            <p>{props.price}</p>
            <p id='hoverRating'>rating: {props.rating}</p>
        </div>
    )
}

export default ListProducts