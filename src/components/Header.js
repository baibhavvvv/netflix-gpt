import React from 'react';
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  const navigate = useNavigate();
  const location = useLocation();  // Get the current location

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
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

 useEffect(() => {
   const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {  
        // Update state with user info
        dispatch(addUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL
        }));
        if (location.pathname === '/') {
          navigate("/browse");
        }
      } else {
        // User is signed out
        dispatch(removeUser());
        if (location.pathname !== '/') {
          navigate("/");
        }
      }
    });

    return () => unsubscribe();  // Clean up the subscription
  }, [dispatch, navigate, location.pathname]);

  return (
    <div className="absolute w-screen px-8 justify-between flex py-2 bg-gradient-to-b from-black z-10">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && location.pathname === '/browse' && (
        <button onClick={handleSignOut} className="font-bold text-white">
          Sign Out
        </button>
      )}
    </div>
  );
};

export default Header;
