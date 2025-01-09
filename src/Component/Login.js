import React, { useRef, useState } from 'react'
import Header from "./Header";
import validation from '../utils/validation';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [signInForm, setSignInForm] = useState(true);
  const [validMessage, setValidMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

// For Authentication to Connect Firebase & Send User Email & Password to Firebase Account...
  const handleSignIn = () => {
    const validationCheck = validation(email.current.value, password.current.value);
    setValidMessage(validationCheck);

    if(signInForm) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        navigate("/browse");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setValidMessage(errorCode + ": " + errorMessage);
      });
    }
    else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        navigate("/browse");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setValidMessage(errorCode + ": " + errorMessage);
      });
    }
  }

  const handleUserClick = () => {
      setSignInForm(!signInForm);
  }
  return (
    <div>
      <Header />
      
      <div className='absolute max-h-screen'>
        <img alt='netflix-banner' src='https://assets.nflxext.com/ffe/siteui/vlv3/2f5a878d-bbce-451b-836a-398227a34fbf/web/IN-en-20241230-TRIFECTA-perspective_5ab944a5-1a71-4f6d-b341-8699d0491edd_large.jpg' />
      </div>

      <form 
          className="rounded-md bg-opacity-80 absolute p-12 w-[450px] bg-black mt-28 mx-auto right-0 left-0 text-white" 
          style={{maxHeight: signInForm ? "46rem" : "40rem"}}
          onSubmit={(e) => e.preventDefault()} // Prevent default form submission for now
      >
        <h1 className='font-bold text-3xl py-4 text-white'>{signInForm === true ? "Sign Up" : "Sign In"}</h1>
        <div className="flex flex-col items-center w-full">
          {signInForm ? <label htmlFor="username" className="text-white mb-2 self-start"><b className='text-white'>Username:</b></label> : ""}
          {signInForm ? 
            <input 
              type="text" 
              id="usename" 
              name="username" 
              className="p-4 my-4 w-full rounded text-black border border-gray-300" 
              placeholder="Username" 
            /> : ""}
          
          
          <label htmlFor="email" className="text-white mb-2 self-start"><b className='text-red-600'>{(validMessage === "Email ID is incorrect" ? "Email: ID is incorrect" : <b className='text-white'>Email: </b>)}</b></label>
          <input 
            ref={email}
            type="email" 
            id="email" 
            name="email" 
            className="p-4 my-4 w-full rounded text-black border border-gray-300" 
            placeholder="Email Id" 
          />

          <label htmlFor="password" className="text-white mb-2 self-start"><b className='text-red-600'>{(validMessage === "Password is incorrect" ? "Password: Minimum 1 (Lett, Symbol, Number) & Length 8 Character's" : <b className='text-white'><b className='text-white'>Password: </b></b>)}</b></label>
          <input 
            ref={password}
            type="password" 
            id="password" 
            name="password" 
            className="p-4 my-4 w-full rounded text-black border border-gray-300" 
            placeholder="Password" 
          />
        </div>
        <button 
          onClick={handleSignIn} 
          type='submit'
          className="my-6 text-center bg-red-600 text-white w-full p-4 rounded transition"
        >
          <b>Sign In</b>
        </button>

        <div className='text-white text-xl flex flex-row justify-center'>
          <b>OR</b>
        </div>

        <button 
          onClick={handleUserClick} 
          type='submit'
          className="my-4 text-center bg-gray-800 text-white w-full p-4 rounded transition"
        >
          <b>{!signInForm ? "You are new user? Sign Up to MOVIE-FLEX" : "Already Registered Sign In Now"}</b>
        </button>

        {!signInForm ? 
          <div
            type='submit' 
            className='flex flex-row justify-center text-white text-xl'
          >
            <b>Forget password?</b>
          </div> : ""
        }
      </form>
    </div>
  )
}

export default Login;