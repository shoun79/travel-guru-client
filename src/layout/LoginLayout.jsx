import { Outlet } from "react-router-dom";
import LoginNavbar from "../pages/Shared/LoginNavbar/LoginNavbar";

const LoginLayout = () => {
    return (
        <div>
            <LoginNavbar></LoginNavbar>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;