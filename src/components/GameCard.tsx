import type { Game } from "../hooks/useGames";
import CroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import PlatformsIconList from "./PlatformsIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <div className="bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden shadow-xl">
      <img
        src={CroppedImageUrl(game.background_image)}
        alt={game.name}
        className="w-full h-68 object-cover"
      />

      <div className="p-4">
        <div className="flex justify-between mb-3 items-center">
          <PlatformsIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </div>
        <h2 className="text-lg font-semibold mb-1">{game.name}</h2>
      </div>
    </div>
  );
};

export default GameCard;
