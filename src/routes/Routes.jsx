import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../page/Home/Home/Home";
import Menu from "../page/MENU/Menu";
import Order from "../page/Order/Order/Order";
import Login from "../page/Login/Login/Login";
import SignUp from "../page/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import DashBoard from "../Layout/DashBoard";
import MyCart from "../page/Dashbord/MyCart/MyCart";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: 'menu',
          element:<Menu></Menu>
        },
        {
          path: 'order/:category',
          element:<PrivateRoutes><Order/></PrivateRoutes>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: '/signUp',
          element: <SignUp></SignUp>
        }
      ]
    },
    {
      path: 'dashboard',
      element:<PrivateRoutes><DashBoard></DashBoard></PrivateRoutes>,
      children:[
        {
          path: 'mycarts',
          element: <MyCart></MyCart>
        }
      ]
    }
  ]);