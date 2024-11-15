// React
import { useEffect, useState } from "react";

// rrd imports
import { Link } from "react-router-dom";

// React icons
import { FcPicture } from "react-icons/fc";
import { FaDownload, FaHeart, FaMoon, FaSun } from "react-icons/fa";

// Components
import NavLinks from "./NavLinks";

// Custom hook
import { useGlobalContext } from "../hooks/useGlobalContext";

// Firebase
import { auth } from "../firebase/firebaseConfig";
import { signOut } from "firebase/auth";

// Toast
import { toast } from "sonner";

// Get theme from LocalStorage
const themeFromLocalStorage = () => {
  return localStorage.getItem("theme") || "winter";
};

function Navbar() {
  const [theme, setTheme] = useState(themeFromLocalStorage);
  const [isFixed, setIsFixed] = useState(false);
  const { likedImages, downloads, user, dispatch } = useGlobalContext();

  // Set fixed when scroll is over 250px
  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 250);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle Theme
  const toggleTheme = () => {
    const newTheme = theme === "winter" ? "dracula" : "winter";
    setTheme(newTheme);
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const signOutUser = async () => {
    try {
      await signOut(auth);
      toast.success("Come back soon!");
      dispatch({ type: "LOGOUT" });
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <header
      className={`bg-base-200 ${
        isFixed ? "fixed left-0 top-0 z-50 w-full shadow-md" : "relative"
      }`}
    >
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

        <div className="navbar-end flex items-center gap-6">
          <Link to="/downloads">
            <div className="indicator">
              <span className="badge indicator-item badge-secondary badge-sm">
                {downloads.length}
              </span>
              <FaDownload className="h-6 w-6" />
            </div>
          </Link>

          <Link to="/favourites">
            <div className="indicator">
              <span className="badge indicator-item badge-secondary badge-sm">
                {likedImages.length}
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
            <FaSun className="swap-on h-7 w-7 fill-current" />

            {/* moon icon */}
            <FaMoon className="swap-off h-7 w-7 fill-current" />
          </label>

          <div className="flex items-center gap-1">
            {user.displayName && (
              <p className="hidden sm:block">
                {user.displayName.split(" ")[0]}
              </p>
            )}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="avatar btn btn-circle btn-ghost"
              >
                <div className="w-10 rounded-full">
                  {user.photoURL && (
                    <img
                      alt={`${user.displayName} avatar`}
                      src={user.photoURL}
                    />
                  )}
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
              >
                <li>
                  <Link to="/profile" className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <button type="button" onClick={signOutUser}>
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
