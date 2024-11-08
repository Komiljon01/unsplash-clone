// React
import { createContext, useEffect, useReducer } from "react";

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
    case "LIKE":
      return { ...state, likedImages: [...state.likedImages, payload] };
    case "UNLIKE":
      return {
        ...state,
        likedImages: state.likedImages.filter((image) => image.id !== payload),
      };
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
  const [state, dispatch] = useReducer(changeState, {
    user: null,
    authReady: false,
    likedImages: [],
    downloads: [],
  });

  useEffect(() => {
    localStorage.setItem("my-splash-data", JSON.stringify(state));
  }, [state]);

  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}
