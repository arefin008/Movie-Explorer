import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Ambient backdrop: layered radial glows standing in for marquee lights,
          no stock photo needed and it stays crisp at any viewport. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 20% 20%, rgba(232,179,74,0.16), transparent 60%), radial-gradient(ellipse 50% 40% at 85% 15%, rgba(193,68,60,0.16), transparent 60%), #14171F',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-16 sm:pt-28 sm:pb-24 text-center">
        <p className="text-marquee text-sm tracking-widest font-semibold mb-4">NOW SCREENING</p>
        <h1 className="font-display text-5xl sm:text-7xl leading-[0.95] text-paper">
          DISCOVER YOUR
          <br />
          NEXT OBSESSION
        </h1>
        <p className="mt-6 max-w-xl mx-auto text-muted text-lg">
          Thousands of shows and films, one search away. Browse by title, check the
          ratings, and settle tonight's watch in seconds.
        </p>
        <div className="mt-10">
          <Link
            to="/movies"
            className="inline-block bg-marquee text-ink font-display text-lg tracking-wide px-8 py-4 rounded-sm hover:bg-paper hover:-translate-y-0.5 transition-all shadow-lg shadow-marquee/10"
          >
            EXPLORE NOW
          </Link>
        </div>
      </div>

      <div className="perf-strip perf-strip-light relative" aria-hidden="true" />
    </section>
  )
}
