import useGenres, { type Genre } from "../hooks/useGenres";
interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const Genres = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, error, isLoading } = useGenres();

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Failed to load genres.</p>;

  return (
    <>
      <div className="mx-2">
        <h1 className="text-4xl font-bold mb-3 dark:text-gray-100">Genres</h1>
        <div className="space-y-3">
          {data?.results.map((genre) => (
            <div
              key={genre.id}
              className={`flex items-center gap-3 cursor-pointer rounded-lg shadow-md ${selectedGenre?.id === genre.id ? "bg-gray-300 dark:bg-gray-700" : ""}`}
            >
              <img
                src={genre.image_background}
                alt={genre.name}
                className="w-10 h-10 rounded-lg object-cover"
              />
              <p
                onClick={() => onSelectGenre(genre)}
                className={`font-medium text-gray-800 dark:text-gray-200 p-2`}
              >
                {genre.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Genres;
