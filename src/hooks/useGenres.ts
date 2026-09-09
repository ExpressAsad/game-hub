import apiClient from '../services/api-client'
import { useQuery } from '@tanstack/react-query'
export interface Genre{
    id: number;
    name: string;
    slug: string;
    image_background: string;
}
interface FetchGenreResponse{
    results: Genre[]
}
const useGenres = () => {
  return useQuery<FetchGenreResponse, Error>({
    queryKey: ['genres'],
    queryFn: () => apiClient.get<FetchGenreResponse>('/genres').then(res => res.data)
  })
}

export default useGenres
