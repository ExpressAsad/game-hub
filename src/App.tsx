import GameGrid from "./components/GameGrid";
import Genre from "./components/Genre";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="min-h-screen grid grid-rows-[90px_1fr] dark:bg-gray-800">
      {/* Navbar */}
      <nav className="bg-gray-100 dark:bg-gray-800">
        <Navbar />
      </nav>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] bg-gray-100 dark:bg-gray-800">
        {/* Sidebar */}
        <aside className="hidden md:block bg-gray-100 dark:bg-gray-800">
          <Genre />
        </aside>

        {/* Main */}
        <main className=" min-h-[500px] bg-gray-100 dark:bg-gray-800">
          <GameGrid />
        </main>
      </div>
    </div>
  );
};

export default App;
