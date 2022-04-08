import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return(
        <Navbar bg="primary" variant="dark" className="mt-4 mb-4 rounded">
            <Container>
                <Navbar.Brand >Bulletin Board</Navbar.Brand>
                <Nav className="justify-content-end">
                    <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
                    <Nav.Link as={NavLink} to='www.google.pl'>Log in</Nav.Link>

                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar;