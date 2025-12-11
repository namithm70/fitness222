import { useEffect, useMemo, useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { recipes, workouts } from '../data/content'
import '../App.css'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/workouts', label: 'Workouts' },
  { to: '/nutrition', label: 'Nutrition' },
  { to: '/progress', label: 'Progress' },
  { to: '/about', label: 'About' },
]

const Layout = () => {
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === '/' && !event.metaKey && !event.ctrlKey) {
        event.preventDefault()
        setSearchOpen(true)
      }
      if (event.key === 'Escape') {
        setSearchOpen(false)
      }
    }

    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  const searchResults = useMemo(() => {
    const query = searchQuery.toLowerCase()
    if (!query) {
      return []
    }

    const workoutMatches = workouts
      .filter((workout) => workout.title.toLowerCase().includes(query))
      .map((workout) => ({
        type: 'Workout',
        title: workout.title,
        to: `/workouts/${workout.slug}`,
        detail: workout.summary,
      }))

    const recipeMatches = recipes
      .filter((recipe) => recipe.title.toLowerCase().includes(query))
      .map((recipe) => ({
        type: 'Recipe',
        title: recipe.title,
        to: '/nutrition',
        detail: `${recipe.mealType} · ${recipe.dietTags.join(', ')}`,
      }))

    return [...workoutMatches, ...recipeMatches]
  }, [searchQuery])

  const closeSearch = () => {
    setSearchOpen(false)
    setSearchQuery('')
  }

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="logo-cluster">
          <Link to="/" className="brand-mark">
            <span>FitWorkout</span>
          </Link>
          <p className="brand-subtitle">Movement + nourishment for modern lives</p>
        </div>
        <nav className="site-nav">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <button className="ghost-button" onClick={() => setSearchOpen(true)}>
          Quick Search <span className="shortcut-hint">/</span>
        </button>
      </header>

      <main className="site-main">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div>
          <p className="footer-title">FitWorkout</p>
          <p>Curated weekly programs backed by nutrition rituals.</p>
        </div>
        <div className="footer-links">
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>
      </footer>

      {searchOpen && (
        <div className="search-overlay" onClick={closeSearch}>
          <div className="search-panel" onClick={(e) => e.stopPropagation()}>
            <div className="search-panel-header">
              <input
                autoFocus
                type="text"
                placeholder="Search workouts or recipes..."
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
              />
              <button className="ghost-button" onClick={closeSearch}>
                Esc
              </button>
            </div>
            <div className="search-results">
              {searchResults.length === 0 ? (
                <p className="muted">Type to explore the library.</p>
              ) : (
                searchResults.map((result) => (
                  <Link
                    key={`${result.type}-${result.title}`}
                    to={result.to}
                    className="result-row"
                    onClick={closeSearch}
                  >
                    <span className="result-type">{result.type}</span>
                    <div>
                      <p>{result.title}</p>
                      <small>{result.detail}</small>
                    </div>
                  </Link>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Layout
