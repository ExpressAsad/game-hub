import { useQuery } from "@tanstack/react-query"
import apiClient from "../services/api-client"
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
    results: Game[]
}
interface GameQuery{
    genre: Genre | null;
    platform: Platform | null,
    ordering: string;
    search: string;
}
const useGames = (query: GameQuery) => {
  return useQuery<FetchGamesResponse, Error>({
    queryKey: ['games', query],
    queryFn: () => apiClient.get<FetchGamesResponse>('/games', {
        params: {
            genres: query.genre?.id,
            platforms: query.platform?.id,
            ordering: query.ordering,
            search: query.search
        }
    }).then(res => res.data)
  })
}

export default useGames
