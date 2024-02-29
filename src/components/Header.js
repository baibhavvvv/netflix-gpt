import React from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
        navigate("/error")
      });
  };
 useEffect(() => {
   const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {  
        const {uid, email, displayName, photoURL} = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
        })    
      );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  },[])

  return (
    <div className="absolute w-screen px-8 justify-between flex py-2 bg-gradient-to-b from-black z-10">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && (
      <div className="flex p-6">
          <img
            className="w-8 h-8"
            src={user?.photoURL}
            alt="user icon"
          />
        <button onClick={handleSignOut} className="font-bold text-white">
          (Sign Out)
        </button>
      </div>
      )}
    </div>
  );
};

export default Header;
