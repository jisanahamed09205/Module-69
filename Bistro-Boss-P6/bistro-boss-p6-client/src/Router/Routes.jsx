import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Secret from '../Pages/Shared/Secret/Secret';
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout></MainLayout>,
        children:[
            //normal user routes
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'menu',
                element: <Menu></Menu>
            },
            {
                path:'order/:category',
                element: <Order></Order>
            },
            {
                path:'login',
                element: <Login></Login>
            },
            {
                path:'signup',
                element: <Register></Register>
            },
            {
                path: 'secret',
                element: <PrivateRoute><Secret></Secret></PrivateRoute>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path:'cart',
                element: <Cart></Cart>
            },
            //admin routes only
            {
                path: 'addItems',
                element: <AdminRoute><AddItems></AddItems></AdminRoute>
            },
            {
                path: 'users',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            }
        ]
    }
])