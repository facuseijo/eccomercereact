import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";

import { ItemList } from "./ItemList";
import { products } from "../data.js/products";

export const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products);
            }, 2200);
         });

         promise     // la respuesta contiene products
            .then((response) => {
                if (id) {
                    const filtrados = response.filter((item)) => item.category === id);
                setItems(filtrados);
                } else {
                  setItems(response);
                }
            })
              .finally (() => setLoading(false));

    }, [id]);

  return (
    <Container className="mt-4">
        <ItemList items={items} />
    </Container >
 );

};