import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import PlaceDetails from "../pages/Home/PlaceDetails/PlaceDetails";
import LoginLayout from "../layout/LoginLayout";
import Register from "../pages/Login/Register/Register";
import Login from "../pages/Login/Login/Login";
import Hotels from "../pages/Others/Hotels";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,

            },
            {
                path: '/place-details/:id',
                element: <PlaceDetails></PlaceDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/placeDetails/${params.id}`)
            }
        ]
    },
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/hotels/:id',
                element: <PrivateRoute><Hotels></Hotels></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/places/${params.id}`)
            }
        ]
    }
]);

export default router;