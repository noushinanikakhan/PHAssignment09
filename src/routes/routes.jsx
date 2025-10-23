import { createBrowserRouter } from "react-router";
import HomeLayouts from "../layouts/HomeLayouts";

const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <HomeLayouts></HomeLayouts>
      }, 
        {
        path: "/auth",
        element: <h2>Authentication</h2>,
      }, 
      {
        path: "/details",
        element: <h2>description</h2>,
      }, 
      {
         path: "/*",
        element: <h2>Error-404</h2>, 
      }
    ]
)

export default router;