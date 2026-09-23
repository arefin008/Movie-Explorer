import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()
  const isListing = location.pathname === '/movies'

  return (
    <header className="sticky top-0 z-40 bg-ink/90 backdrop-blur border-b border-white/10">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="text-2xl" aria-hidden="true">🎬</span>
          <span className="font-display text-xl tracking-wide text-paper group-hover:text-marquee transition-colors">
            MovieExplorer
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <Link
            to="/"
            className={`text-sm font-medium transition-colors ${
              location.pathname === '/' ? 'text-marquee' : 'text-muted hover:text-paper'
            }`}
          >
            Home
          </Link>
          <Link
            to="/movies"
            className={`text-sm font-medium transition-colors ${
              isListing ? 'text-marquee' : 'text-muted hover:text-paper'
            }`}
          >
            Movies
          </Link>
          <Link
            to="/movies"
            className="hidden sm:inline-block bg-marquee text-ink font-semibold text-sm px-4 py-2 rounded-sm hover:bg-paper transition-colors"
          >
            Browse now
          </Link>
        </div>
      </nav>
    </header>
  )
}
