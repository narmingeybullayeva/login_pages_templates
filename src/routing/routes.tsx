import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home";
import LoginPage1 from "../pages/Login/Login_1";
import LoginPage2 from "../pages/Login/Login_2";
import LoginPage3 from "../pages/Login/Login_3";
import LoginPage4 from "../pages/Login/Login_4";
import LoginPage5 from "../pages/Login/Login_5";
import LoginPage6 from "../pages/Login/Login_6";
import LoginPage7 from "../pages/Login/login_7";
import LoginPage8 from "../pages/Login/Login_8";
import LoginPage9 from "../pages/Login/Login_9";
import Layout from "../Layout";
import DocsPage from "../pages/Docs";


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
            { path: "/login-6", element: <LoginPage6 /> },
            { path: "/login-7", element: <LoginPage7 /> },
            { path: "/login-8", element: <LoginPage8 /> },
            { path: "/login-9", element: <LoginPage9 /> },
            { path: "/docs", element: <DocsPage /> },
            { index: true, element: <HomePage /> },
        ],
    }
]);

export default router;
