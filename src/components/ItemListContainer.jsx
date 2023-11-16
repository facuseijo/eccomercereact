import { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";

import { ItemList } from "./ItemList";
import { products } from "../data/products";

export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products);
            }, 2200);
         });
         promise.then((response) => {
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