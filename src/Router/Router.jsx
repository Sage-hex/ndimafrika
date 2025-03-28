import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Library from "../pages/Library/Library";
import Layout from "../Layout/Layout";
import Story from "../pages/Story/Story";
import Scan from "../pages/Scan/Scan";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import UserDashboard from "../pages/UserDashboard/UserDashboard";
import MyStories from "../pages/UserDashboard/MyStories";
import Achievements from "../pages/UserDashboard/Achievements";
import Subscription from "../pages/UserDashboard/Subscription";
import Settings from "../pages/UserDashboard/Settings";
import DashboardOverview from "../pages/UserDashboard/DashboardOverview";
import Login from "../pages/UserLogin/UserLogin";
import Signup from "../pages/UserLogin/UserSignup";
import Admin from "../pages/Admin/Admin";
import About from "../pages/About/About";
import HowItWorks from "../pages/HowItWorks/HowItWorks";

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
        path: "/userSignup",
        element: <Signup/>,
      },
      {
        path: "/userLogin",
        element: <Login />,
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
        path:'howitworks',
        element:<HowItWorks/>
      },

      {
        path:'admin',
        element:<Admin/>,
        children: [
          { index: true, element: <DashboardOverview /> }, 
          {
            path: "my-stories",
            element: <MyStories/>,
          },
          {
            path: "achievements",
            element: <Achievements />,
          },
          {
            path: "subscription",
            element: <Subscription />,
          },
          {
            path: "settings",
            element: <Settings />,
          },
        ],
      },

      {
        path:'userdashboard',
        element:<UserDashboard/>,
        children: [
          { index: true, element: <DashboardOverview /> }, 
          {
            path: "my-stories",
            element: <MyStories/>,
          },
          {
            path: "achievements",
            element: <Achievements />,
          },
          {
            path: "subscription",
            element: <Subscription />,
          },
          {
            path: "settings",
            element: <Settings />,
          },
        ],
      },

      {
        path:'about',
        element:<About/>
      },
      {
        path:"*",
        element:<NotFoundPage/>
      }
    ],
  },
]);

export default router;