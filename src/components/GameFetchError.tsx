const GameFetchError = () => {
  return (
    <div className="m-4 rounded-lg border border-red-300 bg-red-100 p-4 text-red-700">
      <h2 className="font-semibold">Something went wrong</h2>
      <p className="text-sm">
        We couldn't load the games. Please try again later.
      </p>
    </div>
  );
};

export default GameFetchError;