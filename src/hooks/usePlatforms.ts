import { useQuery } from '@tanstack/react-query'
import apiClient from '../services/api-client'
import ms from 'ms';
export interface Platform{
    id: number;
    name: string;
    slug: string;
}
interface FetchPlatformResponse{
    results: Platform[]
}

const usePlatforms = () => {
  return useQuery<FetchPlatformResponse>({
    queryKey: ['platforms'],
    queryFn: () => apiClient('/platforms/lists/parents').then(res => res.data),
    staleTime: ms('24h'),
  })
   
}

export default usePlatforms
