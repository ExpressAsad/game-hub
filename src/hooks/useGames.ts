import { useInfiniteQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import type { Genre } from "./useGenres";
import type { Platform } from "./usePlatforms";
export interface Game{
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[];
    metacritic: number
}
interface FetchGamesResponse{
    count: number;
    next: string | null;
    results: Game[]
}
interface GameQuery{
    genre: Genre | null;
    platform: Platform | null,
    ordering: string;
    search: string;
}
const useGames = (query: GameQuery) => {
  return useInfiniteQuery<FetchGamesResponse, Error>({
    queryKey: ['games', query],
    initialPageParam: 1,
    queryFn: ({pageParam}) => apiClient.get<FetchGamesResponse>('/games', {
        params: {
            genres: query.genre?.id,
            platforms: query.platform?.id,
            ordering: query.ordering,
            search: query.search,
            page: pageParam,
        }

    }).then(res => res.data),
    getNextPageParam: (lastPage, allPages) => {
        return lastPage.next? allPages.length + 1: undefined;
    }
  })

}

export default useGames
