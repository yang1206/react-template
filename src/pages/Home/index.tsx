import { useQuery } from '@tanstack/react-query'
import { useCountStore } from '@/store'
import { getGithub } from '@/api'

function Content() {
  const { count } = useCountStore()
  return (
    <div className="home">
      <div className="i-carbon-campsite inline-block text-4xl" />
      <p>
        <a rel="noreferrer" href="https://github.com/yang1206/react-template" target="_blank">
          Vitesse Lite for React
        </a>
      </p>
      <p>
        <em className="text-sm op75">Opinionated Vite Starter Template</em>
      </p>

      <div className="py-4" />
      <p className="font-semibold">{count}</p>
      {/* <img src={query.data.archive_url} /> */}
    </div>
  )
}
function Home() {
  const { data, isLoading } = useQuery(['git'], getGithub)
  if (isLoading)
    return <div>Loading...</div>

  return (
    <>
     <Content />
     <a className="block" href={data?.html_url}>{data?.full_name}</a>
    </>
  )
}
export default Home
