import { useState } from "react";
import GameGrid from "./components/GameGrid";
import Genres from "./components/Genres";
import Navbar from "./components/Navbar";
import type { Genre } from "./hooks/useGenres";
import type { Platform } from "./hooks/usePlatforms";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null,
  );
  const [searchText, setSearchText] = useState("");
  const [ordering, setOrdering] = useState("");
  return (
    <div className=" min-h-screen grid grid-rows-[90px_1fr] dark:bg-gray-800">
      {/* Navbar */}
      <nav className="bg-gray-100 dark:bg-gray-800">
        <Navbar onSearch={(text) => setSearchText(text)} />
      </nav>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] bg-gray-100 dark:bg-gray-800">
        {/* Sidebar */}
        <aside className="hidden md:block bg-gray-100 dark:bg-gray-800">
          <Genres
            selectedGenre={selectedGenre}
            onSelectGenre={(genre) => setSelectedGenre(genre)}
          />
        </aside>

        {/* Main */}
        <main className=" min-h-[500px] bg-gray-100 dark:bg-gray-800">
          <GameHeading genre={selectedGenre} platform={selectedPlatform} />
          <div className="flex gap-8 px-3">
            <SortSelector onSelectSort={(ordering) => setOrdering(ordering)} />
            <PlatformSelector
              onSelectPlatform={(platform) => setSelectedPlatform(platform)}
            />
          </div>
          <GameGrid
            search={searchText}
            genre={selectedGenre}
            platform={selectedPlatform}
            ordering={ordering}
          />
        </main>
      </div>
    </div>
  );
};

export default App;
