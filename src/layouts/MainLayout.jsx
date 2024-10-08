// rrd imports
import { Outlet } from "react-router-dom";

// Components
import { Navbar, Footer } from "../components";

function MainLayout() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default MainLayout;
