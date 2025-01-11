import React from 'react';
import Login from './Login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Browse from './Browse';

const Body = () => {

// 1st Part : Routing-I --> 8 - 25
  const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/browse",
        element: <Browse />
    }
  ]);

  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body