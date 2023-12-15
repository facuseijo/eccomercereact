import cart from "../assets/imagescart.png";
import React from 'react';
import { useContext } from 'react';
import { Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { CartContext } from './contexts/CartContext';

export const CartWidget = () => {
const {items} = useContext(CartContext) ;

const total = items.reduce(
    (acumulador, actual) => acumulador + actual.quantity, 0); //ver si es stock

    return (
        <div className='d-flex align-items-center container'>
        <Link to={"/cart"}>
        <img src={cart} alt="carrito" width="35" />
        <Badge bg="secondary">{total}</Badge>
        </Link>
      </div>

    );
}
