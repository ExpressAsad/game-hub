import { useEffect, useState } from "react";

const DarkMode = () => {
  const [dark, setDark] = useState(localStorage.getItem("theme") === "dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const toggleDarkMode = () => {
    setDark((prev) => {
      const newMode = !prev;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  return (
    <button
      onClick={toggleDarkMode}
      className={`
        relative
        h-7 w-14
        shrink-0
        rounded-full
        p-1
        transition-colors
        ${dark ? "bg-gray-600" : "bg-gray-300"}
      `}
    >
      <div
        className={`
          absolute top-1
          h-5 w-5
          rounded-full
          bg-white
          shadow-md
          transition-transform duration-200
          ${dark ? "translate-x-7" : "translate-x-0"}
        `}
      />
    </button>
  );
};

export default DarkMode;
