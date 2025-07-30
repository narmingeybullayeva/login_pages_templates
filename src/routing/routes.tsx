import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home";
import LoginPage1 from "../pages/Login/Login_1";
import LoginPage2 from "../pages/Login/Login_2";
import LoginPage3 from "../pages/Login/Login_3";
import LoginPage4 from "../pages/Login/Login_4";
import LoginPage5 from "../pages/Login/Login_5";
import Layout from "../Layout";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/login-1", element: <LoginPage1 /> },
            { path: "/login-2", element: <LoginPage2 /> },
            { path: "/login-3", element: <LoginPage3 /> },
            { path: "/login-4", element: <LoginPage4 /> },
            { path: "/login-5", element: <LoginPage5 /> },
            { index: true, element: <HomePage /> },
        ],
    }
]);

export default router;
