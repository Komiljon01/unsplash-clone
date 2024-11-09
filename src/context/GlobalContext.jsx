// React
import { createContext, useEffect, useReducer } from "react";

// Custom hook
import { useCollection } from "../hooks/useCollection";

export const GlobalContext = createContext();

const changeState = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "AUTH_READY":
      return { ...state, authReady: true };
    case "LOGIN":
      return { ...state, user: payload };
    case "LOGOUT":
      return { ...state, user: null };
    case "ADD_LIKED-IMAGES":
      return { ...state, likedImages: payload };
    case "ADD_DOWNLOADS":
      return { ...state, downloads: [...state.downloads, payload] };
    case "REMOVE_DOWNLOAD":
      return {
        ...state,
        downloads: state.downloads.filter((image) => image.id !== payload),
      };
    default:
      return state;
  }
};

export function GlobalContextProvider({ children }) {
  const { data: likedImages } = useCollection("likedImages");

  const [state, dispatch] = useReducer(changeState, {
    user: null,
    authReady: false,
    likedImages: [],
    downloads: [],
  });

  useEffect(() => {
    localStorage.setItem("my-splash-data", JSON.stringify(state));
  }, [state]);

  useEffect(() => {
    if (likedImages) {
      dispatch({ type: "ADD_LIKED-IMAGES", payload: likedImages });
    }
  }, [likedImages]);

  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}
