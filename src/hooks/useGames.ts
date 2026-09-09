import { useQuery } from "@tanstack/react-query"
import apiClient from "../services/api-client"
import type { Genre } from "./useGenres";
export interface Platform{
    id: number;
    name: string;
    slug: string;
}
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
const useGames = (genre: Genre | null) => {
  return useQuery<FetchGamesResponse, Error>({
    queryKey: ['games', genre],
    queryFn: () => apiClient.get<FetchGamesResponse>('/games', {
        params: {
            genres: genre?.id
        }
    }).then(res => res.data)
  })
}

export default useGames
