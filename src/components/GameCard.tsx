import type { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-md">
      <img
        src={game.background_image}
        alt={game.name}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h2 className="text-lg font-semibold">{game.name}</h2>
      </div>
    </div>
  );
};

export default GameCard;
