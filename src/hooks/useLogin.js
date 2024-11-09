// Firebase
import { auth } from "../firebase/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

// Global Context
import { useGlobalContext } from "./useGlobalContext";

// Toast
import { toast } from "sonner";

export const useLogin = () => {
  const { dispatch } = useGlobalContext();

  const loginWithEmail = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        toast.success(`Great to see you, ${user.displayName}`);
      })
      .catch((error) => {
        let errorMessage;

        switch (error.code) {
          case "auth/invalid-email":
            errorMessage = "The email format is invalid.";
            break;
          case "auth/user-not-found":
          case "auth/invalid-password":
            errorMessage = "Incorrect email or password.";
            break;
          case "auth/missing-password":
            errorMessage = "Please enter your password.";
            break;
          default:
            errorMessage = "An error occurred. Please try again.";
            break;
        }
        toast.error(errorMessage);
      });
  };

  return { loginWithEmail };
};
