import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Library from "../pages/Library/Library";
import Layout from "../Layout/Layout";
import Story from "../pages/Story/Story";
import Scan from "../pages/Scan/Scan";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/library",
        element: <Library />,
      },
      {
        path: "/scan",
        element: <Scan />,
      },
      {
        path: "/story",
        element: <Story />,
      },
      {
        path:"*",
        element:<NotFoundPage/>
      }
    ],
  },
]);

export default router;