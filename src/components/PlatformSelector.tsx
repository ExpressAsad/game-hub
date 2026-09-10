import { useState } from "react";
import usePlatforms, { type Platform } from "../hooks/usePlatforms";
import { FaChevronDown } from "react-icons/fa";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
}

const PlatformSelector = ({ onSelectPlatform }: Props) => {
  const { data: platforms } = usePlatforms();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-lg bg-gray-200 px-4 py-2 font-medium text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600"
      >
        Platforms
        <FaChevronDown
          className={`text-sm transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <ul
          className="
            absolute left-0 z-10 mt-2 w-48
            rounded-lg bg-white p-2 shadow-lg
            dark:bg-gray-800
          "
        >
          {platforms?.results.map((p) => (
            <li
              key={p.id}
              onClick={() => {
                onSelectPlatform(p);
                setIsOpen(false);
              }}
              className="
                cursor-pointer rounded-md px-3 py-2
                text-gray-800 hover:bg-gray-100
                dark:text-gray-200 dark:hover:bg-gray-700
              "
            >
              {p.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PlatformSelector;
