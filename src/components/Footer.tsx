import { useQuery } from '@tanstack/react-query'
import { getGithub } from '@/api'

export default function Footer() {
  const { data } = useQuery({
    queryKey: ['git'],
    queryFn() {
      return getGithub()
    },
  })
  const { isDark, toggleDark } = useDark()
  return (
    <nav className="mt-6 inline-flex gap-2 text-xl">
      <button className="icon-btn !outline-none" onClick={e => toggleDark(e)}>
        {isDark ? <div className="i-line-md:sunny-outline-to-moon-loop-transition" /> : <div className="i-line-md:sunny-outline-loop" />}
      </button>

      <a
        className="i-line-md:github-loop icon-btn"
        rel="noreferrer"
        href={data?.html_url}
        target="_blank"
        title="GitHub"
      />
    </nav>

  )
}
