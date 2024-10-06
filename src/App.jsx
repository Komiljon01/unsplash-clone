// rrd imports
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import { Home, About, Contact, Favourites } from "./pages";

// Layouts
import MainLayout from "./layouts/MainLayout";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
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
