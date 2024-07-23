import { Link, useLocation } from "react-router-dom";
import Hamburger from "./Hamburger";
import { useGlobalState } from "./context/GlobalStateContext";

function Navbar() {
  const { logoVisible } = useGlobalState();
  const location = useLocation();
  const ozpOnLeft = location.pathname === "/contact";

  const navbarLeft = ozpOnLeft
    ? "justify-start pl-10"
    : "justify-center pl-20 lg:pl-24";

  const mobileNavbarLeft = ozpOnLeft
    ? "justify-start pl-6"
    : "justify-center pl-20 lg:pl-24";

  return (
    <>
      <nav className="hidden lg:flex fixed min-w-screen w-screen z-20 justify-between items-center">
        <Link to="/" className={`flex-1 flex ${navbarLeft}`}>
          {logoVisible && (
            <img src="/img/ozp_logo.svg" alt="ozp logo" className="w-16 h-16" />
          )}
        </Link>
        <div className="p-3">
          <Hamburger />
        </div>
      </nav>

      <nav className="flex lg:hidden fixed min-w-screen w-screen z-20 justify-between items-center">
        <Link to="/" className={`flex-1 flex pt-1 ${mobileNavbarLeft}`}>
          <img src="/img/ozp_logo.svg" alt="ozp logo" className="w-16 h-16" />
        </Link>
        <div className="p-3">
          <Hamburger />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
