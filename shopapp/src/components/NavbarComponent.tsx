// https://react-bootstrap.netlify.app/docs/components/navbar
import { useContext } from 'react';
import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContextProvider';

export default function NavbarComponent() {
  let {qty} = useContext(CartContext); // Consumer
  return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>ACME</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
            <Nav.Link as={Link} to="/cart">Cart <Badge>{qty}</Badge></Nav.Link>
            <Nav.Link as={Link} to="/form">Form</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}
