// rrd imports
import { Link } from "react-router-dom";

// Navbar Links Data
const navLinks = [
  {
    path: "/",
    text: "Home",
  },
  {
    path: "/about",
    text: "About",
  },
  {
    path: "/contact",
    text: "Contact",
  },
];

function NavLinks() {
  return (
    <>
      {navLinks.map((link) => {
        const { path, text } = link;

        return (
          <li key={path}>
            <Link to={path}>{text}</Link>
          </li>
        );
      })}
    </>
  );
}

export default NavLinks;
