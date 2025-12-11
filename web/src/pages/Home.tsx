import { Link } from 'react-router-dom'
import {
  coachTips,
  communityStats,
  editorialHighlights,
  nutritionSpotlights,
  recipes,
  testimonials,
  weeklyPlan,
  workouts,
} from '../data/content'

const Home = () => {
  const featuredWorkouts = workouts.slice(0, 6)
  const featuredRecipes = recipes.slice(0, 5)
  const primaryTip = coachTips[0]
  const secondaryTip = coachTips[1]

  if (!primaryTip) {
    return null
  }

  return (
    <div className="page">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Holistic training platform</p>
          <h1>
            Beautifully modern workouts with nutrition wisdom on every phase of your week.
          </h1>
          <p className="lead">
            Curated programs blend strength, mobility, cardio, and chef-crafted fuel so every
            session flows straight into recovery.
          </p>
          <div className="hero-cta">
            <Link to="/workouts" className="primary-button">
              Start Your Plan
            </Link>
            <Link to="/nutrition" className="ghost-button">
              Explore Nutrition
            </Link>
          </div>
          <div className="community-row">
            {communityStats.map((stat) => (
              <div key={stat.label}>
                <p className="muted">{stat.label}</p>
                <p className="stat-value">{stat.value}</p>
                <small>{stat.detail}</small>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-card">
          <div>
            <p className="muted">This week</p>
            <p className="hero-metric">5 sessions saved</p>
            <small>HIIT · Strength · Recovery cadence</small>
          </div>
          <div>
            <p className="muted">Energy balance</p>
            <p className="hero-metric">+320 kcal surplus</p>
            <small>Ideal for lean muscle momentum</small>
          </div>
          <div>
            <p className="muted">Next up</p>
            <p>Sculpt Flow 45 · Recovery Miso Bowl</p>
          </div>
        </div>
      </section>

      <section className="section editorial">
        <div className="section-header">
          <div>
            <p className="eyebrow">Weekly briefings</p>
            <h2>Coach notes & rituals to anchor your focus.</h2>
          </div>
        </div>
        <div className="editorial-grid">
          <div className="coach-tip">
            <p className="eyebrow">{primaryTip.title}</p>
            <h3>{primaryTip.message}</h3>
            <p className="muted">— {primaryTip.author}</p>
            <p>{primaryTip.action}</p>
          </div>
          {editorialHighlights.map((highlight) => (
            <div className="editorial-card" key={highlight.title}>
              <p className="muted">Editorial</p>
              <h3>{highlight.title}</h3>
              <p>{highlight.summary}</p>
              <button className="ghost-button small">{highlight.linkLabel}</button>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <div>
            <p className="eyebrow">Featured movement</p>
            <h2>Workouts engineered for every mood.</h2>
          </div>
          <Link to="/workouts" className="ghost-button">
            View all workouts
          </Link>
        </div>
        <div className="card-grid">
          {featuredWorkouts.map((workout) => (
            <Link
              to={`/workouts/${workout.slug}`}
              className="workout-card"
              key={workout.id}
            >
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
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section dual-grid">
        <div>
          <p className="eyebrow">Fuel highlights</p>
          <h2>Nutrition woven into every session.</h2>
          <p className="lead">
            Seasonal recipes curated with sports dietitians pair with each workout so you never
            wonder what to eat pre or post movement.
          </p>
          <div className="spotlight-list">
            {nutritionSpotlights.map((spotlight) => (
              <div key={spotlight.title} className="spotlight-card">
                <h3>{spotlight.title}</h3>
                <p>{spotlight.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="recipe-grid">
          {featuredRecipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <p className="muted">
                {recipe.mealType} · {recipe.dietTags.join(' / ')} · {recipe.prepTime} min prep
              </p>
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
              <p className="muted">
                Macros {recipe.macros.protein}P / {recipe.macros.carbs}C / {recipe.macros.fat}F
              </p>
              <small>{recipe.chefNote}</small>
            </div>
          ))}
        </div>
      </section>

      <section className="section progress-preview">
        <div className="section-header">
          <div>
            <p className="eyebrow">Progress preview</p>
            <h2>Plan your week with confidence.</h2>
          </div>
          <Link to="/progress" className="ghost-button">
            Open tracker
          </Link>
        </div>
        <div className="timeline">
          {weeklyPlan.map((day) => (
            <div className="timeline-card" key={day.day}>
              <p className="muted">{day.day}</p>
              <h3>{day.workout}</h3>
              <p>{day.nutrition}</p>
              <small>{day.note}</small>
            </div>
          ))}
        </div>
      </section>

      <section className="section testimonials">
        <div className="section-header">
          <div>
            <p className="eyebrow">Community love</p>
            <h2>Stories from members building rituals.</h2>
          </div>
          {secondaryTip && (
            <div className="coach-tip secondary">
              <p className="eyebrow">{secondaryTip.title}</p>
              <p>{secondaryTip.message}</p>
              <small>{secondaryTip.action}</small>
            </div>
          )}
        </div>
        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <p>“{testimonial.quote}”</p>
              <p className="muted">— {testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
