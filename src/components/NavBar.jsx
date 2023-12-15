import { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

import {CartWidget} from './CartWidget';

export const NavBar = () => {

  const [categories, setCategories] = useState();

  useEffect(() => {
    const db = getFirestore();
    const data = collection(db, "items");

    getDocs(data).then((snapshot) => {
      const items = snapshot.docs.map(doc => doc.data());
      setCategories(items.map(i => i.categoryId));
    })
  
  },[])
  
  const uniqueCategories = new Set(categories);

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <NavLink to="/">
          <Navbar.Brand >Distribuidora Bristol Tienda de Comestibles</Navbar.Brand>
        </NavLink>
        <Nav className="me-auto">
        {[...uniqueCategories].map(category => (
                <Nav.Link as={NavLink} key={category} to={`/category/${category}`}>
                    <span className='Nav-Link nav-item'>{category}</span>
            </Nav.Link>
          ))}
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  );
};

