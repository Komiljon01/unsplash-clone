// React
import { useEffect, useState } from "react";

// rrd imports
import { Link } from "react-router-dom";

// React icons
import { FcPicture } from "react-icons/fc";

// Components
import NavLinks from "./NavLinks";
import { FaHeart, FaMoon, FaSun } from "react-icons/fa";

const themeFromLocalStorage = () => {
  return localStorage.getItem("theme") || "winter";
};

function Navbar() {
  const [theme, setTheme] = useState(themeFromLocalStorage);

  const toggleTheme = () => {
    const newTheme = theme === "winter" ? "dracula" : "winter";
    setTheme(newTheme);
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <header className="bg-base-200">
      <div className="align-elements navbar">
        <div className="navbar-start">
          <Link to="/">
            <h3 className="hidden text-3xl font-medium md:block">Unsplash</h3>

            <div className="dropdown md:hidden">
              <div tabIndex={0} role="button">
                <FcPicture className="h-10 w-10" />
              </div>
              <ul
                tabIndex={0}
                className="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow"
              >
                <NavLinks />
              </ul>
            </div>
          </Link>
        </div>

        <div className="navbar-center">
          <ul className="menu menu-horizontal hidden rounded-box md:flex">
            <NavLinks />
          </ul>
        </div>

        <div className="navbar-end flex items-center gap-3">
          <Link to="/favourites">
            <div className="indicator">
              <span className="badge indicator-item badge-secondary badge-sm">
                0
              </span>
              <FaHeart className="h-6 w-6" />
            </div>
          </Link>

          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input
              type="checkbox"
              onChange={toggleTheme}
              checked={theme === "dracula"}
            />

            {/* sun icon */}
            <FaSun className="swap-on h-6 w-6 fill-current" />

            {/* moon icon */}
            <FaMoon className="swap-off h-6 w-6 fill-current" />
          </label>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
