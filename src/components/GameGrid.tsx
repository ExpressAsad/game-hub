import useGames from "../hooks/useGames";
import type { Genre } from "../hooks/useGenres";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameFetchError from "./GameFetchError";
import type { Platform } from "../hooks/usePlatforms";
interface Props {
  genre: Genre | null;
  platform: Platform | null;
  ordering: string;
  search: string;
}
const GameGrid = ({ genre, platform, ordering, search }: Props) => {
  const skeletonCount = [1, 2, 3, 4, 5, 6, 7, 8];
  const {
    data: games,
    error,
    isLoading,
  } = useGames({ genre, platform, ordering, search });
  if (error) return <GameFetchError />;
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {isLoading && skeletonCount.map((s) => <GameCardSkeleton key={s} />)}
        {games?.results.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </>
  );
};

export default GameGrid;
