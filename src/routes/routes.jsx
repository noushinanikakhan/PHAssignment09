import { createBrowserRouter } from "react-router";
import HomeLayouts from "../layouts/HomeLayouts";
import Home from "../pages/Home";
import SkillDetails from "../pages/SkillDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MyProfile from "../pages/MyProfile";
import Error from "../pages/Error";
import PrivateRoute from "../provider/PrivateRoute";
import UpdateProfile from "../pages/UpdateProfile";
import ForgetPassword from "../pages/ForgetPassword";

const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <HomeLayouts></HomeLayouts>,
        children: [
            {
                path: "",
                element: <Home></Home>
            }

        ]
      }, 
        {
        path: "/login",
        element: <Login></Login>,
      }, 
          {
        path: "/register",
        element: <Register></Register>,
      }, 
      {
        path: "/details",
        element: <PrivateRoute>
          <SkillDetails></SkillDetails>
          </PrivateRoute>,
      }, 
      {
             path: "/myprofile",
        element: <MyProfile></MyProfile>,
      },
           {
             path: "/updateprofile",
        element: <UpdateProfile></UpdateProfile>,
      },
                {
             path: "/forgetpassword",
        element: <ForgetPassword></ForgetPassword>,
      },
      {
         path: "/*",
        element: <Error></Error>, 
      }
    ]
)

export default router;