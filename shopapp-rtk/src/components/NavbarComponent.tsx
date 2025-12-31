// https://react-bootstrap.netlify.app/docs/components/navbar
 
import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import { useAppSelector } from '../redux/store';

export default function NavbarComponent() {
  // typesafe useSelector
    let {quantity} = useAppSelector(state => state.cart);

    //@ts-ignore
  // let {quantity} = useSelector(state => state.cart); // mapStatetoProps
  return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>ACME</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
            <Nav.Link as={Link} to="/cart">Cart <Badge>{quantity}</Badge></Nav.Link>
            <Nav.Link as={Link} to="/form">Form</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}
