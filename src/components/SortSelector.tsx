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
  return (
    <div className="relative inline-block group mx-3">
      <button className="flex items-center gap-2 rounded-lg bg-gray-200 px-4 py-2 font-medium text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600">
        Sort by
        <FaChevronDown className="text-sm transition-transform duration-200 group-hover:rotate-180" />
      </button>

      <ul
        className="
          absolute left-0 z-10 mt-2 w-48 origin-top
          rounded-lg bg-white p-2 shadow-lg
          opacity-0 invisible scale-95
          group-hover:opacity-100
          group-hover:visible
          group-hover:scale-100
          transition-all duration-200 ease-out
          dark:bg-gray-800
        "
      >
        {sortOptions.map((option) => (
          <li
            onClick={() => onSelectSort(option.value)}
            key={option.value}
            className="cursor-pointer rounded-md px-3 py-2 text-gray-800 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SortSelector;
