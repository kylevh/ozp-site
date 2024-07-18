import Hamburger from "./Hamburger";
function Navbar() {
  return (
    <nav className="fixed top-0 right-0 z-20">
        <div className="container m-0 p-3">
            <Hamburger />
        </div>
    </nav>
  );
}

export default Navbar;