import { useRef } from "react";
import { FaSearch } from "react-icons/fa";
interface Props {
  onSearchText: (text: string) => void;
}
const SearchInput = ({ onSearchText }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <div className="relative w-full mx-2">
      <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (ref.current) onSearchText(ref.current.value);
        }}
      >
        <input
          ref={ref}
          type="text"
          placeholder="Search games..."
          className="
              w-full
              rounded-full
              border border-gray-300
              bg-white
              py-2.5
              pl-11
              pr-4
              text-sm
              text-gray-800
              placeholder-gray-400
              shadow-sm
              outline-none
              transition
              duration-200
              focus:border-blue-500
              focus:ring-2
              focus:ring-blue-200
              dark:border-gray-600
              dark:bg-gray-700
              dark:text-white
              dark:placeholder-gray-400
              dark:focus:border-blue-400
              dark:focus:ring-blue-900
              sm:py-3
              sm:text-base
            "
        />
      </form>
    </div>
  );
};

export default SearchInput;
