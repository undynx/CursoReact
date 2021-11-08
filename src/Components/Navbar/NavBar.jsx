import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import CartWidget from '../../Components/CartWidget/CartWidget';
import {NavLink} from 'react-router-dom'

function NavBar() {

return (
    <>
        <Navbar bg="light" expand="lg">
            <Container>
                <NavLink to="/">MovRoller</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/">Inicio</NavLink>
                        <NavLink to='/items/freeskate'>Freeskate</NavLink>
                        <NavLink to='/items/agressive'>Agressive</NavLink>
                        <NavLink to='/items/velocidad'>Velocidad</NavLink>
                    </Nav>
                </Navbar.Collapse>
                <CartWidget />
            </Container>
        </Navbar>
    </>
    );
}

export default NavBar;