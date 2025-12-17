


import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from './Components/Home'
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Contacts from './Components/Contacts';
import Notfond from './Components/Notfond';
import Layout from './Components/Layout';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

 const routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      { index: true, element: <Home/> },
      { path: "about", element: <About/> },
      { path: "portfolio", element: <Portfolio/> },
      { path: "contacts", element: <Contacts/> },
      { path: "*", element: <Notfond/> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={routers} />;
}
