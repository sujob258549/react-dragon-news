import { createBrowserRouter } from "react-router-dom";
import Root from "../component/Root";
import Home from "../Home/Home";
import Logine from "../Logine/Logine";
import Register from "../register/Register";
import About from "../about/About";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children:[
            {
              path: '/',
              element: <Home></Home>
            },
            {
              path: '/login',
              element: <Logine></Logine>
            },
            {
              path: '/register',
              element: <Register></Register>
            }
            ,
            {
              path: '/about',
              element: <About></About>
            }
            

        ]
    }
])
export default router;