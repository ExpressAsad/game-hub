import logo from "../assets/React-Logo.png";
const Navbar = () => {
  return (
    <div className="mx-2 flex justify-between items-center">
      <img src={logo} alt="Logo" className="" width={40} height={40} />
      <h1>Hello</h1>
    </div>
  );
};

export default Navbar;
