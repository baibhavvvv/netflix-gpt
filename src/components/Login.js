import React, { useState,useRef } from 'react'
import Header from './Header'
import { checkvalidData } from '../utils/validate';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {

  const [isSignInForm,setIsSignInForm] = useState(true);
  const [errorMessage,setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    const message = checkvalidData(email.current.value,password.current.value);
    setErrorMessage(message);

    if(message) return;
    
    if(!isSignInForm){
      // Sign Up logic

    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value,
       photoURL: "https://avatars.githubusercontent.com/u/117284299?v=4",
    })
    .then(() => {
      const {uid, email, displayName, photoURL} = auth.currentUser;
          dispatch(
            addUser({uid: uid,email: email,displayName: displayName,photoURL: photoURL,
          })    
          );
      navigate("/browse");
    }).catch((error) => {
      setErrorMessage(error.message);
    });
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "" + errorMessage)
    // ..
  });

    } 
    else{
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "" + errorMessage)
      });
    };
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header/>
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/b8dd5151-d491-4e91-b1fb-a19df70df5fc/7acd48e1-92f0-4aa7-bcc6-684b3ee50946/IN-en-20240102-trifectadaily-perspective_alpha_website_small.jpg" 
        alt="logo" />
      </div>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleButtonClick();
      }} className="absolute w-3/12 bg-opacity-80 p-12 rounded-lg bg-black mx-auto right-0 left-0 text-white">
        <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm &&
        <input type="text" placeholder="Full Name" 
        className="p-4 my-4 w-full bg-gray-800" />}
        <input ref={email} type="text" placeholder="Email Address" 
        className="p-4 my-4 w-full bg-gray-800" />
        <input ref={password} type="password" placeholder="Password" className="p-4 my-4 w-full  bg-gray-800" />
        <p className="text-red-600 py-2 text-lg font-bold">{errorMessage}</p>
        <button className="p-4 my-4 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className="py-5 cursor-pointer " onClick={toggleSignInForm}>
        {isSignInForm ? "New to Netflix? Sign Up now!" : "Already have an account? Sign In"}</p>
      </form>
      
    </div>
  )
}

export default Login

