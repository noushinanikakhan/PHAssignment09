import { createBrowserRouter } from "react-router";
import HomeLayouts from "../layouts/HomeLayouts";
import Home from "../pages/Home";
import SkillDetails from "../pages/SkillDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MyProfile from "../pages/MyProfile";
import Error from "../pages/Error";

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
        element: <SkillDetails></SkillDetails>,
      }, 
      {
             path: "/myprofile",
        element: <MyProfile></MyProfile>,
      },
      {
         path: "/*",
        element: <Error></Error>, 
      }
    ]
)

export default router;