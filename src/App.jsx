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

function App() {
  const user = true;

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

  return <RouterProvider router={routes} />;
}

export default App;
