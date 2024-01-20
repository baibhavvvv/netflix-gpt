import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isSignInForm,setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);


  }

  return (
    <div>
      <Header/>
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/b8dd5151-d491-4e91-b1fb-a19df70df5fc/7acd48e1-92f0-4aa7-bcc6-684b3ee50946/IN-en-20240102-trifectadaily-perspective_alpha_website_small.jpg" 
        alt="logo" />
      </div>
      <form className="absolute w-3/12 bg-opacity-80 p-12 rounded-lg bg-black mx-auto right-0 left-0 text-white">
        <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm &&
        <input type="text" placeholder="Full Name" 
        className="p-4 my-4 w-full bg-gray-800" />}
        <input type="text" placeholder="Email Address" 
        className="p-4 my-4 w-full bg-gray-800" />
        <input type="password" placeholder=" Create Password" 
        className="p-4 my-4 w-full  bg-gray-800" />
        <input type="password" placeholder=" Confirm Password" className="p-4 my-4 w-full  bg-gray-800" />
        <button className="p-4 my-4 bg-red-700 w-full rounded-lg">{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className="py-5 cursor-pointer " onClick={toggleSignInForm}>
        {isSignInForm ? "New to Netflix? Sign Up now!" : "Already have an account? Sign In"}</p>
      </form>
      
    </div>
  )
}

export default Login

