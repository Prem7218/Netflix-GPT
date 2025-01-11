import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/Slices/userSlice';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { LOGO } from '../utils/url';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className='absolute w-screen z-10 px-8 py-2 bg-gradient-to-b from-black flex'>
      <img  alt="netflix-logo" 
            className='w-40'
            src={LOGO} />
    </div>
  )
}

export default Header;