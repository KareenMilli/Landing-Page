import { createBrowserRouter } from "react-router-dom";
import About from "./Pages/About";
import Request from "./Pages/Request";
import App from "./App";
import NotFound from "./Pages/NotFound";
import GuestLayout from "./Pages/GuestLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <GuestLayout />,
        children: [
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/request",
                element: <Request />,
            },
            {
                path: "/home",
                element: <App />,
            },
        ],
    },
    {

        path: "*", // Use the asterisk as the path
        element: <NotFound />,
    }
]);

export default router;
