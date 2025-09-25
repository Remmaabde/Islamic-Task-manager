import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Completed from "./pages/completed";
import Incompleted from "./pages/Incompleted";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/tasks", element: <Tasks /> },
      { path: "/completed", element: <Completed /> },
      { path: "/incompleted", element: <Incompleted /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
