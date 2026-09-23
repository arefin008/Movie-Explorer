import { useEffect } from 'react'
import { getYear, getRating, getBackdrop, stripHtml } from '../api/tvmaze'

export default function MovieModal({ show, onClose }) {
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!show) return null

  const backdrop = getBackdrop(show)
  const rating = getRating(show)
  const year = getYear(show)
  const genres = show.genres?.length ? show.genres.join(', ') : 'Unspecified'
  const network = show.network?.name || show.webChannel?.name || 'Unknown'

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`${show.name} details`}
    >
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative bg-ink-raised border border-white/10 rounded-sm max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          aria-label="Close details"
          className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center bg-ink/80 text-paper rounded-full hover:bg-curtain transition-colors"
        >
          ✕
        </button>

        <div className="aspect-video bg-black/40">
          {backdrop ? (
            <img src={backdrop} alt={`${show.name} artwork`} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted">
              No artwork available
            </div>
          )}
        </div>

        <div className="perf-strip" aria-hidden="true" />

        <div className="p-6 sm:p-8">
          <h2 className="font-display text-3xl text-paper">{show.name}</h2>
          <p className="mt-2 text-muted flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
            <span>⭐ Rating: {rating ?? 'N/A'}</span>
            <span className="text-white/20">|</span>
            <span>📅 Release: {year}</span>
          </p>

          <div className="mt-6 grid sm:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-marquee font-semibold mb-1">Genre</p>
              <p className="text-muted">{genres}</p>
            </div>
            <div>
              <p className="text-marquee font-semibold mb-1">Network</p>
              <p className="text-muted">{network}</p>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-marquee font-semibold mb-2">Overview</p>
            <p className="text-paper/90 leading-relaxed">{stripHtml(show.summary)}</p>
          </div>

          <button
            onClick={onClose}
            className="mt-8 w-full sm:w-auto bg-curtain text-paper font-semibold px-6 py-3 rounded-sm hover:bg-curtain/80 transition-colors"
          >
            ❌ Close
          </button>
        </div>
      </div>
    </div>
  )
}
