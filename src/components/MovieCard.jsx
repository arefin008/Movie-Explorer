import { getYear, getRating, getPoster } from '../api/tvmaze'

export default function MovieCard({ show, onSelect }) {
  const poster = getPoster(show)
  const rating = getRating(show)
  const year = getYear(show)

  return (
    <div className="group bg-ink-raised border border-white/10 rounded-sm overflow-hidden flex flex-col hover:border-marquee/50 transition-colors">
      <div className="aspect-[2/3] bg-black/40 overflow-hidden">
        {poster ? (
          <img
            src={poster}
            alt={`${show.name} poster`}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted text-sm p-4 text-center">
            No poster available
          </div>
        )}
      </div>

      {/* Ticket-stub perforation between poster and details */}
      <div className="perf-strip" aria-hidden="true" />

      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-display text-lg leading-tight text-paper line-clamp-2" title={show.name}>
          {show.name}
        </h3>
        <p className="mt-2 text-sm text-muted">
          {rating ? `⭐ ${rating}` : '⭐ —'} <span className="mx-1">•</span> 📅 {year}
        </p>
        <button
          onClick={() => onSelect(show)}
          className="mt-4 w-full bg-transparent border border-marquee text-marquee text-sm font-semibold py-2 rounded-sm hover:bg-marquee hover:text-ink transition-colors"
        >
          See Details
        </button>
      </div>
    </div>
  )
}
