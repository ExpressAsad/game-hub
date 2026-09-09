import { useQuery } from "@tanstack/react-query"
import apiClient from "../services/api-client"
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
const useGames = () => {
  return useQuery<FetchGamesResponse, Error>({
    queryKey: ['games'],
    queryFn: () => apiClient.get<FetchGamesResponse>('/games').then(res => res.data)
  })
}

export default useGames
