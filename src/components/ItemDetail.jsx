import { useState, useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { ItemCount } from './components/ItemCount';
import { CartContext } from "./contexts/CartContext";


export const ItemDetail = ({ item }) => {

  const [adds, setAdds] = useState(0);
  
  const {onAdd} = useContext(CartContext);

  const add =  (quantity) => {
      setAdds(quantity);
       onAdd(item, quantity);
     };
   

  return (
      
    <Card id="container-detail">
      <div id="image-container">
        <Card.Img src={item.imageId} className="image"/>
      </div>
      <div className="description-price">
        <div className="container-description">
          <Card.Title className="title">{item.title}</Card.Title>
          <Card.Text className="description">{item.description}</Card.Text>
          <p className="stock">Stock: {item.stock}</p>
        </div>
        <div className="container-price">
          <p>$ {item.price}</p>
          {adds == 0 && <ItemCount stock={item.stock} onAdd={add} initialValue={1}/>}
          {adds >= 1 && 
            <Link to={"/cart"}>
              <Button id="" variant="dark" >Realizar Compra</Button>
            </Link>
          }
        </div>
      </div>
    </Card>
  )
};