import { queryOptions } from '@tanstack/react-query'
import request from '@/service/index'

interface GITHUB {
  owner: {
    archive_url: string
    login: string
  }
  full_name: string
  html_url: string
}

export function fetchGithubRepo(repo: string) {
  return queryOptions({
    queryKey: [repo, 'repos'],
    queryFn: () => request.get<GITHUB>(`api/repos/${repo}`),
  })
}
