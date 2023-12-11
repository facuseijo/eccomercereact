import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { products } from "../data/products";

export const ItemDetailsContainer = () => {
    const [item, setItem] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products);
            }, 2200);
        });

        promise.then((response) => {
            const findeds = response.find((item) => item.id == id);
            setItem(findeds);
        });
    }, [id]);

    if (!item) {
        return <>Loading ...</>;
    }

    return <div>
        <h1>{item.name}</h1>
        <img src={item.img} width={200} />
        <p>{item.description}</p>
    </div>
};
