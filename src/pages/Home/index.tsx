import { useQuery } from '@tanstack/react-query'
import { useCountStore } from '@/store'
import { getGithub } from '@/api'
const Content = () => {
  const { count } = useCountStore()
  return (
    <div className="home">
      <div className="i-carbon-campsite text-4xl inline-block" />
      <p>
        <a rel="noreferrer" href="https://github.com/antfu/vitesse-lite" target="_blank">
          Vitesse Lite
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
const Home = () => {
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

