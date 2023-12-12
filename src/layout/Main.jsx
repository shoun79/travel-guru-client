import './Main.css'
import Header from "../pages/Shared/Header/Header";
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className="bg-img">
            <Header></Header>
            <Outlet></Outlet>
        </div>

    );
};

export default Main;