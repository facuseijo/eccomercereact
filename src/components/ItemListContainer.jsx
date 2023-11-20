import { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";

import { ItemList } from "./ItemList";
import { products } from "../data.js/products"; 

export const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products);
            }, 2200);
         });
         promise.then((response) => { // la respuesta contiene products
            setItems(response);
         }) 
         .finally (() => setLoading(false));

        }, []);
   
    return (
     <Container className= "mt-4"> 
        <ItemList items={items} />
     </Container >
    );

};