import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const sortOptions = [
  { label: "Relevance", value: "" },
  { label: "Date Added", value: "-added" },
  { label: "Date Created", value: "-created" },
  { label: "Date Updated", value: "-updated" },
  { label: "Rating", value: "-rating" },
  { label: "Metacritic", value: "metacritic" },
];

interface Props {
  onSelectSort: (ordering: string) => void;
}

const SortSelector = ({ onSelectSort }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block ml-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-lg bg-gray-200 px-4 py-2 font-medium text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600"
      >
        Sort by
        <FaChevronDown
          className={`text-sm transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <ul
          className="
            absolute left-0 z-10 mt-2 w-32
            rounded-lg bg-white p-2 shadow-lg
            dark:bg-gray-800
          "
        >
          {sortOptions.map((option) => (
            <li
              key={option.value}
              onClick={() => {
                onSelectSort(option.value);
                setIsOpen(false);
              }}
              className="
             
                cursor-pointer rounded-md px-3 py-2
                text-gray-800 hover:bg-gray-100
                dark:text-gray-200 dark:hover:bg-gray-700
              "
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SortSelector;
