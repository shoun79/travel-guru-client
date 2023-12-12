import { Container, Nav, NavLink, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from './../../../assets/images/icons/a/logo.png'
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";
import toast from "react-hot-toast";
const LoginNavbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const hendelLogOut = () => {
        logOut()
            .then(() => {
                toast.success('Log out!')
            }).catch((error) => {
                // An error happened.
            });
    }
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



                    <Nav
                        className="ms-auto my-2 my-lg-0 "

                        navbarScroll
                    >
                        <NavLink className=' text-decoration-none me-5 fs-6 fw-bold' to="/news">News</NavLink>
                        <NavLink className=' text-decoration-none me-5 fs-6 fw-bold' to="/destination">Destination</NavLink>
                        <NavLink className='text-decoration-none me-5 fs-6 fw-bold' to="/blog">Blog</NavLink>
                        <NavLink className='text-decoration-none me-5 fs-6 fw-bold' to="/contact">Contact</NavLink>


                    </Nav>
                    {
                        user ? <><NavLink className='text-decoration-none fs-6 fw-bold me-4'>{user?.displayName}</NavLink> <button onClick={hendelLogOut} type="button" className="btn btn-warning">Logout</button> </> : <Link to='/login'>
                            <button type="button" className="btn btn-warning">Login</button>
                        </Link>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default LoginNavbar;