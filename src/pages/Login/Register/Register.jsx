import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaFacebook, FaGoogle } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";
import toast from "react-hot-toast";
import { GoogleAuthProvider } from "firebase/auth";
const Register = () => {
    const { createUser, updateUser, providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const hendleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        console.log(firstName, lastName, email, password, confirmPassword);
        if (password !== confirmPassword) {
            toast.error('Password do not match!')
            return;
        }
        createUser(email, password)
            .then(result => {
                hendleUpdateUser(firstName);
                form.reset();
                const createdUser = result.user;
                console.log(createdUser);
                toast.success('Successfully Created!')
                navigate('/login')
            })
            .catch(error => {
                console.log(error);
            })
    }

    const hendleUpdateUser = (name) => {
        const profile = {
            displayName: name
        }
        updateUser(profile)
            .then(() => {
                // Profile updated!
                // ...
            }).catch((error) => {
                console.log(error);
                // An error occurred
                // ...
            });
    }
    const googleLogin = () => {
        providerLogin(googleProvider)
            .then((result) => {
                console.log(result.user);
                navigate(from, { replace: true })
            }).catch((error) => {
                console.log(error);

            });
    }
    return (
        <Container className="pb-4">
            <Row>
                <Col className="mx-auto mt-5 " lg={6} >
                    <Form onSubmit={hendleRegister} className="border p-4">
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label className="fs-3 fw-bold mb-4">Create an account</Form.Label>
                            <Form.Control required
                                type="text" name='firstName'
                                placeholder="First name"
                                className="border-0 border-bottom" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicLastName">
                            <Form.Control name='lastName' className="border-0 border-bottom" type="text" placeholder="Last Name" />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control required name='email' className="border-0 border-bottom" type="email" placeholder="Username or Email" />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control className="border-0 border-bottom" type="password"
                                name="password"
                                placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                            <Form.Control className="border-0 border-bottom" type="password"
                                name="confirmPassword"
                                placeholder="Confirm Password" />
                        </Form.Group>
                        <Form.Group className="mb-3 d-flex justify-content-between" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember Me" />
                            <Link className="text-warning">Forgot Password</Link>
                        </Form.Group>

                        <Button className="w-100 py-2" variant="warning" type="submit">
                            Create an account
                        </Button>

                        <div>
                            <p className="text-center mt-2">Already have an account?  <Link to='/login' className="text-warning">Login</Link></p>
                        </div>
                    </Form>
                    <Row className="mt-3">
                        <Col xl={8} className="mx-auto">
                            <div className=" d-flex">
                                <hr className="w-75 text-center" />
                                <span className="mx-3">Or</span>
                                <hr className="w-75 text-center" />
                            </div>
                            <div className="border rounded-pill ps-2 py-2">
                                <Button className="text-decoration-none bg-white border-0">
                                    <FaFacebook className="me-5 fs-3 text-primary" />
                                    <span className="text-dark">Continue with Facebook</span>
                                </Button>
                            </div>
                            <div className="border rounded-pill ps-2 py-2 mt-2">
                                <Button onClick={googleLogin} className="text-decoration-none bg-white border-0">
                                    <FaGoogle className="me-5 fs-3 text-primary" />
                                    <span className="text-dark">Continue with Google</span>
                                </Button>
                            </div>
                        </Col>
                    </Row>


                </Col>
            </Row>
        </Container>
    );
};

export default Register;