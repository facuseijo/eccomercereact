import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { CartWidget } from "./CartWidget";

import {products} from "../data/products";

const categories = products.map((products) => products.category);

const uniqueCategories = new Set (categories);

export const NavBar = () => {
    return (
    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <NavLink to= "/">
         <Navbar.Brand >Distribuidora Bristol Tienda de Comestibles</Navbar.Brand>
       </NavLink>
       <Nav className="me-auto">
        {[...uniqueCategories].map((products) => (
         <Nav.Link as={NavLink} key={products} to={`/category/${products}`}>
           {products}
         </Nav.Link>
         )) }
      </Nav>
      <CartWidget />
    </Container>
    </Navbar>
    );
};
