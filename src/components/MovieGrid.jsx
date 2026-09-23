import MovieCard from './MovieCard'

export default function MovieGrid({ shows, onSelect }) {
  if (shows.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-2xl font-display text-paper mb-2">NO MATCHES FOUND</p>
        <p className="text-muted">Try a different title, or check your spelling.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
      {shows.map((show) => (
        <MovieCard key={show.id} show={show} onSelect={onSelect} />
      ))}
    </div>
  )
}
