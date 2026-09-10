import logo from "../assets/React-Logo.png";
import DarkMode from "./DarkMode";
import SearchInput from "./SearchInput";
interface Props {
  onSearch: (text: string) => void;
}
const Navbar = ({ onSearch }: Props) => {
  return (
    <div className="shadow-md rounded-lg py-2 px-4">
      <div className=" flex items-center justify-between">
        <img src={logo} alt="Logo" className="" width={40} height={40} />
        <SearchInput onSearchText={(text) => onSearch(text)} />
        <DarkMode />
      </div>
    </div>
  );
};

export default Navbar;
