
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { CartWidget } from "./CartWidget";

const NavBar = () => {
    return (
    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">Distribuidora Bristol Tienda de Comestibles{" "}
       </Navbar.Brand>
       <Nav className="me-auto">
        <Nav.Link href="#home">Salazones</Nav.Link>
        <Nav.Link href="#features">Embutidos</Nav.Link>
        <Nav.Link href="#pricing">Chacinados</Nav.Link>
      </Nav>
      <CartWidget />
    </Container>
    </Navbar>
    );
};

export default NavBar;