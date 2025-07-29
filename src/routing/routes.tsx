import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home";
import LoginPage1 from "../pages/Login/Login_1";
import Layout from "../Layout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/login-1", element: <LoginPage1 /> },
            { index: true, element: <HomePage /> },
        ],
    }
]);

export default router;
