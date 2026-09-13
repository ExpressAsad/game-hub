import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGames from "../hooks/useGames";
import type { Genre } from "../hooks/useGenres";
import type { Platform } from "../hooks/usePlatforms";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameFetchError from "./GameFetchError";
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
    fetchNextPage,
    hasNextPage,
  } = useGames({ genre, platform, ordering, search });
  if (error) return <GameFetchError />;
  const fetchedGames =
    games?.pages.reduce((total, page) => total + page.results.length, 0) || 0;
  return (
    <>
      <InfiniteScroll
        dataLength={fetchedGames}
        hasMore={!!hasNextPage}
        next={() => fetchNextPage()}
        loader={
          <div className="flex justify-center gap-1 py-5">
            <div className="w-2 h-2 bg-gray-900 dark:bg-white rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-gray-900 dark:bg-white rounded-full animate-bounce [animation-delay:0.1s]"></div>
            <div className="w-2 h-2 bg-gray-900 dark:bg-white rounded-full animate-bounce [animation-delay:0.2s]"></div>
            <div className="w-2 h-2 bg-gray-900 dark:bg-white rounded-full animate-bounce [animation-delay:0.3s]"></div>
          </div>
        }
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {isLoading && skeletonCount.map((s) => <GameCardSkeleton key={s} />)}
          {games?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </React.Fragment>
          ))}
        </div>
      </InfiniteScroll>
      {/* {hasNextPage && (
        <button
          onClick={() => fetchNextPage()}
          className="mx-auto my-5 block px-3 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg border lg:mx-4"
        >
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </button> */}
      {/* )} */}
    </>
  );
};

export default GameGrid;
