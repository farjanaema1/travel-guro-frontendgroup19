import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/main";
import Home from "../home/home/home";
import Contact from "../contact/contact";

import BuyNow from "../BuyNow/BuyNow";
import LogIn from "../../register/login";
import Signup from "../../register/signup";
import AboutUs from "../aboutus/aboutus";
import DashBoardLayout from "../../layout/dashboeardlayout";
import MyCart from "../dashboard/myCart/myCart";
import AllUsers from "../dashboard/allusers/allusers";
import AdminRoute from "./adminRoute";

import Payment from "../dashboard/payment";
import ManageCars from "../dashboard/managePlace";
import Details from "../destinition/details";
import AddPlace from "../dashboard/addplace";
import Dashboard from "../dashboard/dashboard/dashboard";
import ManagePlaces from "../dashboard/managePlace";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
           
           
           
            {
                path:'/contact',
                element:<Contact></Contact>
            },
            {
                path:'/login',
                element:<LogIn></LogIn>
            },
            {
                path:'/signup',
                element:<Signup></Signup>
            },
            {
                path:'/details/:id',
                element:<Details></Details>,
                loader:({params}) => 
                fetch(`http://localhost:5000/cars/${params.id}`)
            },
            {
                path:'/buynow/:id',
                element:<BuyNow></BuyNow>,
                loader:({params}) => fetch(`http://localhost:5000/cars/${params.id}`)
            },
           

            {
                path:'/aboutus',
                element:<AboutUs></AboutUs>
            },
           
            
        ]
    },
    {
        path:'/dashboard',
        element:<DashBoardLayout></DashBoardLayout>,
    
        children:[
             {
                path:'/dashboard',
                 element:<MyCart></MyCart>

             },
            {
                path:'/dashboard/allusers',
                 element:<AdminRoute><AllUsers></AllUsers></AdminRoute>,
                element:<AllUsers></AllUsers>
            },
            {
                path:'/dashboard/addCar',
                element:<AddPlace></AddPlace>

            },
            {
                path:'/dashboard/dashboard',
                element:<Dashboard></Dashboard>

            },
            {
                 path:'/dashboard/manageCar',
                element:<ManagePlaces></ManagePlaces>
            },
            {
                path:'/dashboard/payment/:id',
                element:<Payment></Payment>,
                loader:({params}) => fetch(`http://localhost:5000/orders2/${params.id}`)

            }
        ]
    }
])
export default router;