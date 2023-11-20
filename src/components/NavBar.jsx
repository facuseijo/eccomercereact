import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { CartWidget } from "./CartWidget";

import { products } from "../data.js/products"; 

const categories = products.map((item) => item.category);

const uniqueCategories = new Set (categories);
console.log([...uniqueCategories]); // desestructuracion y convercion a nuevo array

export const NavBar = () => {
    return (
    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <NavLink to= "/">
         <Navbar.Brand >Distribuidora Bristol Tienda de Comestibles</Navbar.Brand>
       </NavLink>
       <Nav className="me-auto">
        {[...uniqueCategories].map((item) => (
         <Nav.Link as={NavLink} key={item} to={`/category/${item}`}>
           {item}
         </Nav.Link>
         )) }
      </Nav>
      <CartWidget />
    </Container>
    </Navbar>
    );
};
