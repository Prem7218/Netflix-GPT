import React, { useState } from 'react'
import Header from "./Header";

const Login = () => {
  const [signInForm, setSignInForm] = useState(true);

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
          <h1 className='font-bold text-3xl py-4 text-white'>{signInForm === true ? "Sign In" : "Sign Up"}</h1>
          <div className="flex flex-col items-center w-full">
            {signInForm ? <label htmlFor="username" className="text-white mb-2 self-start">Username:</label> : ""}
            {signInForm ? 
              <input 
                type="text" 
                id="usename" 
                name="username" 
                className="p-4 my-4 w-full rounded border border-gray-300" 
                placeholder="Username" 
              /> : ""}
            
            <label htmlFor="email" className="text-white mb-2 self-start">Email:</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              className="p-4 my-4 w-full rounded border border-gray-300" 
              placeholder="Email Id" 
            />

            <label htmlFor="password" className="text-white mb-2 self-start">Password:</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              className="p-4 my-4 w-full rounded border border-gray-300" 
              placeholder="Password" 
            />
          </div>
          <button 
            type="submit" 
            className="my-6 text-center bg-red-600 text-white w-full p-4 rounded transition"
          >
            <b>Sign In</b>
          </button>

          <div className='text-white text-xl flex flex-row justify-center'>
            <b>OR</b>
          </div>

          <button 
            onClick={handleUserClick} 
            className="my-4 text-center bg-gray-800 text-white w-full p-4 rounded transition"
          >
            <b>{signInForm ? "You are new user? Sign Up to MOVIE-FLEX" : "Already Registered Sign In Now"}</b>
          </button>

          <div className='flex flex-row justify-center text-white text-xl'>
            <b>Forget password?</b>
          </div>
        </form>
    </div>
  )
}

export default Login;