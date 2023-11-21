import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


import { products } from "../data.js/products";

export const ItemDetailsContainer = () => {
 const [item, setItem] = useState(null);

 const { id } = useParams();

    useEffect(() => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products);
            }, 2200);
         });

         promise     // la respuesta contiene products
            .then((response) => {         
                    const filtrados = response.find((item)) => item.id == id);
                setItem(filtrados);
                
            });
    }, [id]);

    if (!item) {
        return <>Loading ...</>;
    }

 return <div>
    <h1>{item.name}</h1>
    <img src={item.img} width={220} />
    <p>{item.description}</p>
  </div>
};