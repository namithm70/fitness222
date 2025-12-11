import { progressInsights, progressRecommendations, weeklyPlan } from '../data/content'

const Progress = () => {
  return (
    <div className="page">
      <section className="section">
        <div className="section-header">
          <div>
            <p className="eyebrow">Progress tracker</p>
            <h1>See your training narrative.</h1>
            <p className="lead">
              Plans sync across devices, highlight nutrition pairings, and surface micro
              adjustments to keep your momentum responsibly balanced.
            </p>
          </div>
        </div>

        <div className="insight-grid">
          {progressInsights.map((insight) => (
            <div className="insight-card" key={insight.title}>
              <p className="muted">{insight.title}</p>
              <h3>{insight.value}</h3>
              <p>{insight.detail}</p>
            </div>
          ))}
        </div>

        <div className="timeline detail">
          {weeklyPlan.map((day) => (
            <div className="timeline-card" key={day.day}>
              <p className="muted">{day.day}</p>
              <h3>{day.workout}</h3>
              <p>{day.nutrition}</p>
              <small>{day.note}</small>
              <button className="ghost-button small">Edit day</button>
            </div>
          ))}
        </div>

        <div className="recommendation-grid">
          {progressRecommendations.map((rec) => (
            <div className="insight-card" key={rec.title}>
              <p className="eyebrow">{rec.title}</p>
              <p>{rec.detail}</p>
              <small>{rec.action}</small>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Progress
