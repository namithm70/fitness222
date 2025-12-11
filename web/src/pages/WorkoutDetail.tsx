import { Link, useParams } from 'react-router-dom'
import { recipes, workouts } from '../data/content'

const WorkoutDetail = () => {
  const { slug } = useParams()
  const workout = workouts.find((item) => item.slug === slug)

  if (!workout) {
    return (
      <div className="page">
        <section className="section">
          <h1>Workout not found</h1>
          <Link to="/workouts" className="primary-button">
            Back to library
          </Link>
        </section>
      </div>
    )
  }

  const nutritionPairing = recipes.find(
    (recipe) => recipe.title === workout.nutrition.pairing,
  )

  return (
    <div className="page workout-detail">
      <section className="hero hero-detail">
        <div>
          <p className="eyebrow">{workout.focus}</p>
          <h1>{workout.title}</h1>
          <p className="lead">{workout.summary}</p>
          <div className="tag-row">
            {workout.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <div className="pill-row">
            <span>{workout.duration} min</span>
            <span>{workout.difficulty}</span>
            <span>{workout.intensity} intensity</span>
          </div>
          <p className="coach-note">{workout.coachNote}</p>
          <div className="hero-cta">
            <button className="primary-button">Add to progress plan</button>
            <a href={workout.playlist} className="ghost-button" target="_blank" rel="noreferrer">
              Soundtrack
            </a>
          </div>
        </div>
        <div
          className="detail-media"
          style={{ backgroundImage: `url(${workout.heroImage})` }}
        />
      </section>

      <section className="section workout-specs">
        <div className="spec-card">
          <p className="muted">Equipment</p>
          <p>{workout.equipment.join(', ')}</p>
        </div>
        <div className="spec-card">
          <p className="muted">Muscles</p>
          <p>{workout.muscles.join(', ')}</p>
        </div>
        <div className="spec-card">
          <p className="muted">Estimated burn</p>
          <p>{workout.calories} kcal</p>
        </div>
        <div className="spec-card">
          <p className="muted">Focus cadence</p>
          <p>{workout.focus}</p>
        </div>
      </section>

      <section className="section dual-grid">
        <div>
          <p className="eyebrow">Flow outline</p>
          <ul className="step-list">
            {workout.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>
        </div>
        <div className="nutrition-panel">
          <p className="eyebrow">Nutrition guidance</p>
          <div className="spotlight-card">
            <p className="muted">Pre-workout</p>
            <p>{workout.nutrition.pre}</p>
          </div>
          <div className="spotlight-card">
            <p className="muted">Post-workout</p>
            <p>{workout.nutrition.post}</p>
          </div>
          <div className="spotlight-card">
            <p className="muted">Hydration</p>
            <p>{workout.nutrition.hydration}</p>
          </div>
          {nutritionPairing && (
            <div className="recipe-card large">
              <p className="muted">Suggested recipe</p>
              <h3>{nutritionPairing.title}</h3>
              <p>{nutritionPairing.description}</p>
              <p className="muted">
                {nutritionPairing.macros.protein}P / {nutritionPairing.macros.carbs}C /{' '}
                {nutritionPairing.macros.fat}F · {nutritionPairing.prepTime} min prep
              </p>
              <ul className="ingredient-list">
                {nutritionPairing.ingredients.map((ingredient) => (
                  <li key={ingredient}>{ingredient}</li>
                ))}
              </ul>
              <small>{nutritionPairing.chefNote}</small>
              <Link to="/nutrition" className="ghost-button small">
                View recipe details
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default WorkoutDetail
