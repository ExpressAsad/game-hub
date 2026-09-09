import { useState } from "react";

const DarkMode = () => {
  const [dark, setDark] = useState(false);
  const toggleDarkMode = () => {
    const newMode = !dark;

    setDark(newMode);

    document.documentElement.setAttribute(
      "data-theme",
      newMode ? "dark" : "light",
    );
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  return (
    <button
      onClick={() => {
        toggleDarkMode();
      }}
      className={`w-14 h-7 rounded-full p-1 flex items-center transition-colors ${
        dark ? "bg-gray-600" : "bg-gray-300"
      }`}
    >
      <div
        className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
          dark ? "translate-x-7" : "translate-x-0"
        }`}
      />
    </button>
  );
};

export default DarkMode;
