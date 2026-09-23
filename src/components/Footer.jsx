export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-raised">
      <div className="perf-strip perf-strip-light opacity-10" aria-hidden="true" />
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-xl" aria-hidden="true">🎬</span>
          <span className="font-display tracking-wide text-paper">MovieExplorer</span>
        </div>
        <p className="text-sm text-muted">© 2026 MovieExplorer. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="text-muted hover:text-marquee transition-colors"
          >
            GitHub
          </a>
          <span className="text-white/20">•</span>
          <span className="text-muted">Data via TVMaze</span>
        </div>
      </div>
    </footer>
  )
}
