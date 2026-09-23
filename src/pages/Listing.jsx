import { useEffect, useMemo, useState } from 'react'
import SearchBar from '../components/SearchBar'
import MovieGrid from '../components/MovieGrid'
import MovieModal from '../components/MovieModal'
import { fetchAllShows, searchShows } from '../api/tvmaze'

export default function Listing() {
  const [allShows, setAllShows] = useState([])
  const [searchResults, setSearchResults] = useState(null) // null = not searching
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedShow, setSelectedShow] = useState(null)

  // Initial load: browse-everything view
  useEffect(() => {
    let cancelled = false
    setLoading(true)
    fetchAllShows(0)
      .then((data) => {
        if (!cancelled) setAllShows(data)
      })
      .catch((err) => {
        if (!cancelled) setError(err.message)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [])

  // Debounced search-as-you-type
  useEffect(() => {
    if (!query.trim()) {
      setSearchResults(null)
      return
    }
    setLoading(true)
    const timeout = setTimeout(() => {
      searchShows(query)
        .then((results) => {
          setSearchResults(results)
          setError(null)
        })
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false))
    }, 350)
    return () => clearTimeout(timeout)
  }, [query])

  const shows = useMemo(() => {
    return searchResults !== null ? searchResults : allShows
  }, [searchResults, allShows])

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="mb-10">
        <h1 className="font-display text-4xl text-paper text-center mb-2">BROWSE THE LIBRARY</h1>
        <p className="text-muted text-center mb-8">
          {searchResults !== null
            ? `${shows.length} result${shows.length === 1 ? '' : 's'} for "${query}"`
            : 'Search by title, or scroll to see what\u2019s screening.'}
        </p>
        <SearchBar value={query} onChange={setQuery} />
      </div>

      {loading && (
        <div className="text-center py-20 text-muted">Loading shows...</div>
      )}

      {!loading && error && (
        <div className="text-center py-20">
          <p className="text-curtain font-semibold mb-1">Something went wrong</p>
          <p className="text-muted text-sm">{error}</p>
        </div>
      )}

      {!loading && !error && <MovieGrid shows={shows} onSelect={setSelectedShow} />}

      {selectedShow && (
        <MovieModal show={selectedShow} onClose={() => setSelectedShow(null)} />
      )}
    </div>
  )
}
