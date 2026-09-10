import type { Genre } from "../hooks/useGenres";
import type { Platform } from "../hooks/usePlatforms";

interface Props {
  genre: Genre | null;
  platform: Platform | null;
}

const GameHeading = ({ genre, platform }: Props) => {
  let heading = "Games";

  if (genre && platform) {
    heading = `${genre.name} ${platform.name} Games`;
  } else if (genre) {
    heading = `${genre.name} Games`;
  } else if (platform) {
    heading = `${platform.name} Games`;
  }

  return (
    <h1 className="px-4 mb-2 text-3xl font-bold text-gray-800 dark:text-white text-6xl">
      {heading}
    </h1>
  );
};

export default GameHeading;
