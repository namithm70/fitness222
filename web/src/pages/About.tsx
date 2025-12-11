import { communityStats } from '../data/content'

const About = () => (
  <div className="page">
    <section className="section dual-grid">
      <div>
        <p className="eyebrow">About the platform</p>
        <h1>Where design meets discipline.</h1>
        <p className="lead">
          FitWorkout blends cinematic storytelling, coaching expertise, and culinary wisdom to remove the friction from
          everyday training. We believe workouts should feel like a curated experience—not another checkbox.
        </p>
      </div>
      <div className="spotlight-list">
        <div className="spotlight-card">
          <h3>Methodology</h3>
          <p>
            Every program follows a rotate, recover, replenish loop so muscle groups get the perfect cadence of stress
            and restoration.
          </p>
        </div>
        <div className="spotlight-card">
          <h3>Nutrition partners</h3>
          <p>
            Recipes are crafted with sports dietitians to align macros with the intensity of each workout block.
          </p>
        </div>
        <div className="spotlight-card">
          <h3>Accessibility</h3>
          <p>Captions, form cues, and low-impact swaps ensure inclusivity across the board.</p>
        </div>
      </div>
    </section>

    <section className="section community-highlight">
      <p className="eyebrow">Community pulse</p>
      <div className="community-row">
        {communityStats.map((stat) => (
          <div key={stat.label}>
            <p className="muted">{stat.label}</p>
            <p className="stat-value">{stat.value}</p>
            <small>{stat.detail}</small>
          </div>
        ))}
      </div>
    </section>
  </div>
)

export default About
