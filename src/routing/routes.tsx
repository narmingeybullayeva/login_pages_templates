import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";
import Layout from "../Layout";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/login", element: <LoginPage /> },
            { index: true, element: <HomePage /> },
        ],
    }
]);

export default router;
