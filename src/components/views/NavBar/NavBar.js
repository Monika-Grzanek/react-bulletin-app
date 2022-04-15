import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {changeUserStatus, getUser} from './../../../redux/usersRedux';

const NavBar = () => {
    const [isLogged, setIsLogged] = useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userData = useSelector(getUser);

    const handleLogIn = () => {
        dispatch(changeUserStatus({...userData, logged: true}))
        setIsLogged(true);
        navigate('/'); 
        console.log('test login', userData)
    };

    const handleLogOut = () => {
        dispatch(changeUserStatus({...userData, logged: false}))
        setIsLogged(false);
        navigate('/'); 
        console.log('test logout')
    };

    return(
        <Navbar bg="primary" variant="dark" className="mt-4 mb-4 rounded">
            <Container>
                <Navbar.Brand >Bulletin Board</Navbar.Brand>
                <Nav className="justify-content-end">
                    <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
                    {!isLogged && <Nav.Link as={NavLink} onClick={handleLogIn} to='/'>Log in</Nav.Link>}
                    {isLogged && <Nav.Link as={NavLink} to='/post/add'>Add post</Nav.Link>}
                    {isLogged && <Nav.Link as={NavLink} to='/myposts'  >My posts</Nav.Link>}
                    {isLogged && <Nav.Link  onClick={handleLogOut} as={NavLink} to="/" >Log out</Nav.Link>}
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar;