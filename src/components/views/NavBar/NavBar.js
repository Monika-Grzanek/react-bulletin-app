import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const NavBar = () => {
    const [logged, setLogged] = useState(true);

    const logIn = e => {
        e.preventDeafault();
        setLogged(true);
    }
    
    const logOut = e => {
        e.preventDeafault();
        setLogged(false);
        console.log('test')
    }

    return(
        <Navbar bg="primary" variant="dark" className="mt-4 mb-4 rounded">
            <Container>
                <Navbar.Brand >Bulletin Board</Navbar.Brand>
                <Nav className="justify-content-end">
                    <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
                    {!logged && <Nav.Link as={NavLink} to='www.google.pl' onSubmit={logIn}>Log in</Nav.Link>}
                    {logged && <Nav.Link as={NavLink} to='/post/add'>Add post</Nav.Link>}
                    {logged && <Nav.Link as={NavLink} to='/myposts'>My posts</Nav.Link>}
                    {logged && <Nav.Link onSubmit={logOut} as={NavLink} to="/" >Log out</Nav.Link>}
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar;