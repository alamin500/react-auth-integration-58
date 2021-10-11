import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  GithubAuthProvider,
} from "firebase/auth";
initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const gitbubProvider = new GithubAuthProvider();
  const signInUsingGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        console.log(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const signInUsingGithub = () => {
    signInWithPopup(auth, gitbubProvider).then((result) => {
      setUser(result.user);
    });
  };
  const logOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };
  useEffect(() => {
    onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          console.log("inside state change", user);
          setUser(user);
        }
      },
      []
    );
  });
  return {
    user,
    error,
    signInUsingGoogle,
    signInUsingGithub,
    logOut,
  };
};
export default useFirebase;
