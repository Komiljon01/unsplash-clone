// rrd imports
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import { Home, About, Contact, Favourites } from "./pages";

// Layouts
import MainLayout from "./layouts/MainLayout";

// Actions
import { action as HomeAction } from "./pages/Home";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
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
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
