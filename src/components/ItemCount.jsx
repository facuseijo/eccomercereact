import { useState } from 'react';
import {  Button } from 'react-bootstrap';

export const ItemCount = ({ stock, onAdd, initialValue}) => {
    const [count, setCount] = useState(initialValue);

    const handleDecrementCount = () => {
        if (count > initialValue) {
            setCount((prev) => prev - 1);
        }
      };

      const handleIncrementCount = () => {
        if (count < stock) {
            setCount((prev) => prev + 1);
        }
      };  

      const handleAdd = () => {
        if (stock >= initialValue) {
          onAdd(count);
          setCount(initialValue);
        } else {
          alert("Este producto no se encuentra disponible!");
        }
    };    

    
  return (
    <div>
      <div className="col-6">
        <div className="row align-items-center">
          <div className="col-4">
            <Button
              className="w-100 fs-4 btn btn-danger fw-bolder"
              onClick={handleDecrementCount}
            >
              -
            </Button>
          </div>
          <div className="col-4 d-flex justify-content-center">
            <span className="text-center fw-bolder fs-4">Unidades {count && stock} </span>
          </div>
          <div className="col-4">
            <Button
              className="w-100 fs-4 btn btn-danger fw-bolder"
              onClick={handleIncrementCount}  >
            
             +
            </Button>
          </div>
        </div>
        <div>
            <Button className="btn btn-primary mt-3" onClick={handleAdd}>
                Pedir ahora!
            </Button>
        </div>
      </div>
    </div>
  );
};