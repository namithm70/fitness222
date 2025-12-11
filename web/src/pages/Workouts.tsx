import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { workouts } from '../data/content'

const muscles = ['All', ...new Set(workouts.flatMap((workout) => workout.muscles))]
const intensities = ['All', 'Low', 'Moderate', 'High']

const Workouts = () => {
  const [search, setSearch] = useState('')
  const [muscleFilter, setMuscleFilter] = useState('All')
  const [intensityFilter, setIntensityFilter] = useState('All')

  const featuredWorkouts = workouts.slice(0, 3)
  const workoutStats = useMemo(() => {
    const total = workouts.length || 1
    const avgDuration = Math.round(
      workouts.reduce((sum, workout) => sum + workout.duration, 0) / total,
    )
    const avgCalories = Math.round(
      workouts.reduce((sum, workout) => sum + workout.calories, 0) / total,
    )
    const equipmentSet = new Set(workouts.flatMap((workout) => workout.equipment))
    const intensityStats = intensities
      .filter((intensity) => intensity !== 'All')
      .map((intensity) => ({
        label: intensity,
        count: workouts.filter((workout) => workout.intensity === intensity).length,
      }))

    return {
      avgDuration,
      avgCalories,
      equipmentCount: equipmentSet.size,
      intensityStats,
    }
  }, [])

  const filteredWorkouts = useMemo(() => {
    return workouts.filter((workout) => {
      const matchesSearch = workout.title.toLowerCase().includes(search.toLowerCase())
      const matchesMuscle =
        muscleFilter === 'All' || workout.muscles.includes(muscleFilter)
      const matchesIntensity =
        intensityFilter === 'All' || workout.intensity === intensityFilter
      return matchesSearch && matchesMuscle && matchesIntensity
    })
  }, [search, muscleFilter, intensityFilter])

  return (
    <div className="page">
      <section className="section workouts-hero">
        <div>
          <p className="eyebrow">Workout library</p>
          <h1>Design your weekly flow.</h1>
          <p className="lead">
            Choose from HIIT, strength, recovery, and mindful mobility sessions—each linked to
            nutrition guidance and playlists to keep momentum aligned.
          </p>
          <div className="pill-row">
            <span>{workouts.length}+ sessions</span>
            <span>Filters for every muscle + intensity</span>
            <span>Nutrition pairing baked in</span>
          </div>
        </div>
        <div className="featured-workouts">
          {featuredWorkouts.map((workout) => (
            <Link to={`/workouts/${workout.slug}`} key={workout.id} className="featured-card">
              <p className="muted">{workout.focus}</p>
              <h3>{workout.title}</h3>
              <small>{workout.duration} min · {workout.intensity} intensity</small>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <div>
            <p className="eyebrow">Workout library</p>
            <h1>Select your next flow.</h1>
            <p className="lead">
              Filter by muscle focus, desired intensity, or simply search by vibe and we’ll surface the perfect pairing.
            </p>
          </div>
        </div>
        <div className="workout-insights">
          <div className="insight-card">
            <p className="muted">Avg. duration</p>
            <h3>{workoutStats.avgDuration} min</h3>
            <small>Across {workouts.length} sessions</small>
          </div>
          <div className="insight-card">
            <p className="muted">Avg. burn</p>
            <h3>{workoutStats.avgCalories} kcal</h3>
            <small>Estimated calories per flow</small>
          </div>
          <div className="insight-card">
            <p className="muted">Equipment covered</p>
            <h3>{workoutStats.equipmentCount}</h3>
            <small>Unique pieces across the library</small>
          </div>
        </div>
        <div className="intensity-legend">
          {workoutStats.intensityStats.map((stat) => (
            <div className="legend-pill" key={stat.label}>
              <span>{stat.label} intensity</span>
              <small>{stat.count} flows</small>
            </div>
          ))}
        </div>
        <div className="filter-bar">
          <input
            type="text"
            placeholder="Search workouts..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <select value={muscleFilter} onChange={(event) => setMuscleFilter(event.target.value)}>
            {muscles.map((muscle) => (
              <option value={muscle} key={muscle}>
                {muscle}
              </option>
            ))}
          </select>
          <select
            value={intensityFilter}
            onChange={(event) => setIntensityFilter(event.target.value)}
          >
            {intensities.map((intensity) => (
              <option value={intensity} key={intensity}>
                {intensity}
              </option>
            ))}
          </select>
        </div>
        <p className="muted filter-meta">{filteredWorkouts.length} results • {intensityFilter} intensity • {muscleFilter} focus</p>

        <div className="card-grid">
          {filteredWorkouts.map((workout) => (
            <div className="workout-card" key={workout.id}>
              <div
                className="workout-media"
                style={{ backgroundImage: `url(${workout.heroImage})` }}
              />
              <div className="workout-body">
                <p className="muted">
                  {workout.duration} min · {workout.focus}
                </p>
                <h3>{workout.title}</h3>
                <p>{workout.summary}</p>
                <div className="pill-row">
                  <span>{workout.difficulty}</span>
                  <span>{workout.intensity} intensity</span>
                  <span>{workout.nutrition.pairing}</span>
                </div>
                <div className="tag-row">
                  {workout.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <p className="coach-note">Coach note: {workout.coachNote}</p>
                <div className="equipment-row">
                  <p className="muted">Equipment</p>
                  <p>{workout.equipment.join(', ')}</p>
                </div>
                <div className="workout-meta-row">
                  <span>{workout.calories} kcal</span>
                  <span>{workout.muscles.join(' / ')}</span>
                </div>
                <div className="card-actions">
                  <Link to={`/workouts/${workout.slug}`} className="primary-button subtle">
                    View details
                  </Link>
                  <a
                    href={workout.playlist}
                    target="_blank"
                    rel="noreferrer"
                    className="ghost-button small"
                  >
                    Playlist
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Workouts
