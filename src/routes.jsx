import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./pages/login/Login";
import Register from "./pages/login/Register";

export const router = createBrowserRouter([{
    path:'/',
    element:<App />,
    children:[
        {
            path:'/login',
            element:<Login />
        },
        {
            path:'/register',
            element:<Register />
        },
    ]
}])