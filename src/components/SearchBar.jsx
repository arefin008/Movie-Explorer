export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative max-w-xl mx-auto">
      <span
        className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
        aria-hidden="true"
      >
        🔍
      </span>
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search for a movie or show..."
        aria-label="Search for a movie or show"
        className="w-full bg-ink-raised border border-white/10 rounded-sm pl-11 pr-4 py-3.5 text-paper placeholder:text-muted focus:border-marquee outline-none transition-colors"
      />
    </div>
  )
}
