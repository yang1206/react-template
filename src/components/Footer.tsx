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
    <nav className="text-xl mt-6 inline-flex gap-2">
      <button className="icon-btn !outline-none" onClick={() => toggleDark()}>
        {isDark ? <div className="i-line-md:sunny-outline-to-moon-loop-transition" /> : <div className="i-line-md:sunny-outline-loop" />}
      </button>

      <a
        className="icon-btn i-line-md:github-loop"
        rel="noreferrer"
        href={data?.html_url}
        target="_blank"
        title="GitHub"
      />
    </nav>

  )
}
