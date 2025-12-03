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
import SkillDescription from "../pages/SkillDescription";
import About from "../pages/AboutUs";
import Contact from "../pages/Contact";
import Job from "../pages/job";
import PressKit from "../pages/PressKit";


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
        path: "/allcourses",
        element: <SkillDetails></SkillDetails>,
      },
         {
        path: "/details/:id",
        element: 
          <SkillDescription></SkillDescription>,
      },
        {
          path: "/about",
          element: <About></About>
        },
        {
          path: "/contact",
          element: <Contact></Contact>,
        },
           {
             path: "/jobs",
        element: <Job></Job>,
      },
              {
             path: "/presskit",
        element: <PressKit></PressKit>,
      },
      {
             path: "/myprofile",
        element: <PrivateRoute>
     <MyProfile></MyProfile>
        </PrivateRoute>
     
      ,
      },
           {
             path: "/updateprofile",
        element: <PrivateRoute>
                  <UpdateProfile></UpdateProfile>
        </PrivateRoute>,
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