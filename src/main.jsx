import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Global Context
import { GlobalContextProvider } from "./context/GlobalContext.jsx";

// Toast
import { Toaster } from "sonner";

createRoot(document.getElementById("root")).render(
  <GlobalContextProvider>
    <App />
    <Toaster position="top-center" richColors duration={2000} />
  </GlobalContextProvider>,
);
