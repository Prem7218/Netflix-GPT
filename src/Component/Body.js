import React, { useEffect } from 'react';
import Login from './Login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Browse from './Browse';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/Slices/userSlice';

const Body = () => {
  const dispatch = useDispatch();

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

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid, email, displayName} = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName}));
        
      } else {
        dispatch(removeUser());
      }
    });
  }, []);

  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body