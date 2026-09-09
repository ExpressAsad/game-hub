import logo from "../assets/React-Logo.png";
import DarkMode from "./DarkMode";
const Navbar = () => {
  return (
    <div className="shadow-md rounded-lg">
      <div className="container mx-auto flex items-center justify-between py-2">
        <img src={logo} alt="Logo" className="" width={60} height={40} />
        <DarkMode />
      </div>
    </div>
  );
};

export default Navbar;
