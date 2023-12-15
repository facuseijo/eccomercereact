import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";
import Swal from "sweetalert2";
import { CartContext } from "../contexts/CartContext";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const clearValue = { name: "", phone: "", email: "" };

export const Cart = () => {
    const { items, cleanCart, removeItem } = useContext(CartContext);
    const [buyer, setBuyer] = useState(clearValue);

    const total = items.reduce((acumulado, actual) => {
        return acumulado + actual.price * actual.quantity;
    }, 0)

    const handleSendOrder = (e) => {
        e.preventDefault();

        const order = {
            buyer: buyer,
            items: items,
            total: total
        };
        const db = getFirestore();

        const orderCollection = collection(db, "orders");

        addDoc(orderCollection, order).then(({ id }) => {
            if (id) {
                Swal.fire("Pedido listo para" + id);
                cleanCart();
                setBuyer(clearValue);
            }
        })
    }
    const handleChange = (ev) => {
        const { name, value } = ev.target;
        setBuyer((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    if(!items.length) return <div> Aun no has comprado nada </div>;

    return (
        <>
            <Container>
                <div className="row d-flex justify-content-center">
                    {items.map((item) => (
                        <div
                            className="col-3 bg-white text-dark mb-4 mx-2 rounded"
                            key={item.id}
                        >
                            <div>
                                <button
                                    className="float-end bg-transparent border-0"
                                    onClick={() => removeItem(item.id)}> ❌
                                </button>
                                <mark>{total}</mark>
                                <h1 className="w-100 fs-4">{item.title}</h1>
                                <h2 className="fs-5">Precio: {item.price}</h2>
                                <h3 className="fs-5">Cantidad: {item.quantity}</h3>
            
                                <img className="img-fluid pb-2" src={item.imageId} width={180} alt="" />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="col-6 mx-auto mb-5">
                <h2 className="subtitlebuy">Datos del Comprador</h2>
                    <form className="form" onSubmit={(e) => handleSendOrder(e)}>
                        <div>
                            <label>Nombre</label>
                            <input type="text" className="form-control"
                             name="nombre" 
                             value={buyer.name} 
                             onChange={handleChange} required />
                        </div>
                        <div>
                            <label>Telefono</label>
                            <input
                                type="text"
                                name="telefono"
                                className="form-control"
                                value={buyer.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                value={buyer.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </form>
                    <h2 className="mt-3">Total Carrito: ${total}</h2>
                    <button className="btn btn-danger mt-3" onClick={handleSendOrder} >Realizar pedido</button>
                </div>
                <div className="d-flex justify-content-center">
                    {items.length == 0 ? (
                        <Link to="/">
                            <button className="btn-warning btn fw-bolder">
                                Volver a la tienda
                            </button>
                        </Link>
                    ) : (
                        <button
                            className="btn-primary btn mx-auto fw-bolder"
                            onClick={cleanCart}
                        >
                            Vaciar carrito
                        </button>
                    )}
                </div>
            </Container>
        </>
    );
};


