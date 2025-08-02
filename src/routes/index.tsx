import App from "@/App";
import Footer from "@/pages/footer";
import Task from "@/pages/tasks";
import User from "@/pages/user";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        // path: "task",
        index: true,
        element: <Task></Task>,
      },
      {
        path: "user",
        element: <User></User>,
      },
    ],
  },
  {
    path: "/",
    element: <Footer></Footer>,
  },
]);

export default router;
