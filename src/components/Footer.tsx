import { useQuery } from '@tanstack/react-query'
import { getGithub } from '@/api'
export default function Footer() {
  const { data } = useQuery(['git'], getGithub)
  const { isDark, toggleDark } = useDark()
  return (
    <nav className="text-xl mt-6 inline-flex gap-2">
      <button className="icon-btn !outline-none" onClick={() => toggleDark()}>
        {isDark ? <div className="i-carbon-moon" /> : <div className="i-carbon-sun" />}
      </button>

      <a
        className="icon-btn i-carbon-logo-github"
        rel="noreferrer"
        href={data?.html_url}
        target="_blank"
        title="GitHub"
      />
    </nav>

  )
}
