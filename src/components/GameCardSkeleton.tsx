const GameCardSkeleton = () => {
  return (
    <div className="bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden shadow-xl animate-pulse">
      {/* Image skeleton */}
      <div className="w-full h-68 bg-gray-300 dark:bg-gray-600" />

      <div className="p-4">
        {/* Platforms + critic score */}
        <div className="flex justify-between mb-3 items-center">
          <div className="flex gap-2">
            <div className="w-5 h-5 rounded bg-gray-300 dark:bg-gray-600" />
            <div className="w-5 h-5 rounded bg-gray-300 dark:bg-gray-600" />
            <div className="w-5 h-5 rounded bg-gray-300 dark:bg-gray-600" />
          </div>

          <div className="w-10 h-6 rounded bg-gray-300 dark:bg-gray-600" />
        </div>

        {/* Game name */}
        <div className="h-6 w-3/4 rounded bg-gray-300 dark:bg-gray-600" />
      </div>
    </div>
  );
};

export default GameCardSkeleton;
