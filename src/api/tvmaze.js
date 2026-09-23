const BASE_URL = 'https://api.tvmaze.com'

/**
 * Fetch all shows (used as the "browse everything" view).
 * TVMaze paginates /shows with ~250 results per page via ?page=N.
 */
export async function fetchAllShows(page = 0) {
  const res = await fetch(`${BASE_URL}/shows?page=${page}`)
  if (!res.ok) throw new Error(`Failed to load shows (${res.status})`)
  return res.json()
}

/**
 * Search shows by title. TVMaze wraps each hit as { score, show }.
 * We flatten it so callers always work with a plain array of show objects.
 */
export async function searchShows(query) {
  const res = await fetch(`${BASE_URL}/search/shows?q=${encodeURIComponent(query)}`)
  if (!res.ok) throw new Error(`Search failed (${res.status})`)
  const data = await res.json()
  return data.map((entry) => entry.show)
}

export function getYear(show) {
  return show?.premiered ? show.premiered.slice(0, 4) : 'TBA'
}

export function getRating(show) {
  return show?.rating?.average ?? null
}

export function getPoster(show) {
  return show?.image?.medium || show?.image?.original || null
}

export function getBackdrop(show) {
  return show?.image?.original || show?.image?.medium || null
}

export function stripHtml(html) {
  if (!html) return 'No overview available.'
  return html.replace(/<[^>]+>/g, '')
}
