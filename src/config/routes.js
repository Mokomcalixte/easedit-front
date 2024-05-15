import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import SignUp from "../screens/signup";
  import ProtectedRoutes from "../components/protectedRoutes";
  import Login from "../screens/login";
  import Home from "../screens/home";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SignUp/>,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/home",
      element: <ProtectedRoutes component={Home} />,
    },

  ]);
  
  const Routes = () => {
    return (
      <RouterProvider router={router} />
    );
  }
  
  export default Routes;
  