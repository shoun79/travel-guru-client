import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";
import { Container, Spinner } from "react-bootstrap";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation()
    if (loading) {
        return <Container className="text-center mt-5">
            <Spinner animation="grow" />
        </Container>;
    }
    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace> </Navigate>;
};

export default PrivateRoute;