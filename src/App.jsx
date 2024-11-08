// React
import { useEffect } from "react";

// rrd imports
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

// Layouts
import MainLayout from "./layouts/MainLayout";

// Pages
import {
  Home,
  About,
  Contact,
  Favourites,
  Downloads,
  ImageInfo,
  Login,
  Register,
} from "./pages";

// Components
import { ProtectedRoutes } from "./components";

// Actions
import { action as HomeAction } from "./pages/Home";

// Global Context
import { useGlobalContext } from "./hooks/useGlobalContext";

// Firebase
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebaseConfig";

function App() {
  const { user, dispatch, authReady } = useGlobalContext();

  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <MainLayout />
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home />,
          action: HomeAction,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/favourites",
          element: <Favourites />,
        },
        {
          path: "/downloads",
          element: <Downloads />,
        },
        {
          path: "/image-info/:id",
          element: <ImageInfo />,
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/register",
      element: user ? <Navigate to="/" /> : <Register />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch({ type: "LOGIN", payload: user });
      dispatch({ type: "AUTH_READY" });
    });
  }, []);

  return <>{authReady && <RouterProvider router={routes} />}</>;
}

export default App;
