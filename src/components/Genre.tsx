import useGenres from "../hooks/useGenres";

const Genre = () => {
  const { data, error, isLoading } = useGenres();

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Failed to load genres.</p>;

  return (
    <>
      <h1 className="text-4xl font-bold mb-3">Genres</h1>
      <div className="space-y-3">
        {data?.results.map((genre) => (
          <div
            key={genre.id}
            className="flex items-center gap-3 cursor-pointer rounded-lg shadow-md"
          >
            <img
              src={genre.image_background}
              alt={genre.name}
              className="w-10 h-10 rounded-lg object-cover"
            />

            <p className="font-medium text-gray-800 dark:text-gray-200">
              {genre.name}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Genre;
