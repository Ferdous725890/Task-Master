import App from "@/App";
import Footer from "@/pages/footer";
import User from "@/pages/user";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        children: [
            {
                path: "/user",
                element: <User></User>,
            }
        ]

    },
    {
        path : '/',
        element : <Footer></Footer>
    }

])

export default router;