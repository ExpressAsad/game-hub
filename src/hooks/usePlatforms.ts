import { useQuery } from '@tanstack/react-query'
import apiClient from '../services/api-client'
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
    queryFn: () => apiClient('/platforms/lists/parents').then(res => res.data)
  })
   
}

export default usePlatforms
