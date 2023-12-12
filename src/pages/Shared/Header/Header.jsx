import { Container, Form, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

import Logo from './../../../assets/images/icons/a/logo.png'
import './Header.css'
const Header = () => {
    return (
        <Navbar expand="lg">
            <Container>
                <Link to="/">
                    <Navbar.Brand >
                        <img style={{ height: '56px' }} className="img-fluid" src={Logo} alt="" />
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle className=" bg-white" aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">

                    <Form className="d-flex form-pl" >
                        <Form.Control

                            type="search"
                            placeholder="Search your Destination..."
                            className="me-2 bg-secondary text-white form-pl"
                            aria-label="Search"
                        />

                    </Form>

                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavLink className='text-white text-decoration-none me-5 fs-6 fw-bold' to="/news">News</NavLink>
                        <NavLink className='text-white text-decoration-none me-5 fs-6 fw-bold' to="/destination">Destination</NavLink>
                        <NavLink className='text-white text-decoration-none me-5 fs-6 fw-bold' to="/blog">Blog</NavLink>
                        <NavLink className='text-white text-decoration-none me-5 fs-6 fw-bold' to="/contact">Contact</NavLink>


                    </Nav>
                    <Link to='/login'>
                        <button type="button" className="btn btn-warning">Login</button>
                    </Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;