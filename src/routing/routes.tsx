import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home";
import LoginPage1 from "../pages/Login/Login_1";
import LoginPage2 from "../pages/Login/Login_2";
import LoginPage3 from "../pages/Login/Login_3";
import Layout from "../Layout";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/login-1", element: <LoginPage1 /> },
            { path: "/login-2", element: <LoginPage2 /> },
            { path: "/login-3", element: <LoginPage3 /> },
            { index: true, element: <HomePage /> },
        ],
    }
]);

export default router;
