// Firebase
import { auth } from "../firebase/firebaseConfig";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Global Context
import { useGlobalContext } from "./useGlobalContext";

// Toast
import { toast } from "sonner";

export const useRegister = () => {
  const { dispatch } = useGlobalContext();

  const registerWithGoggle = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        dispatch({ type: "LOGIN", payload: user });
        toast.success("Logged in successfully");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  return { registerWithGoggle };
};
