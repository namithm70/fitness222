import { useMemo, useState } from 'react'
import { recipes, workouts } from '../data/content'

const dietFilters = ['All', 'Vegan', 'Vegetarian', 'Gluten-Free', 'High-Protein', 'Low-Carb']
const mealOptions = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Snack', 'Recovery']
const hydrationRituals = [
  {
    title: 'Glow Hydration',
    detail: 'Coconut water + lime + sea salt + mint sprigs.',
    tip: 'Use during HIIT or cardio blocks to preserve minerals.',
  },
  {
    title: 'Night Reset',
    detail: 'Chamomile, magnesium powder, and orange peel.',
    tip: 'Sip 60 minutes before bed to prime parasympathetic mode.',
  },
]
const prepWorkflows = [
  {
    title: 'Sunday batch prep',
    description: 'Roast veggies + cook grains + blend dressing; store in glass containers.',
  },
  {
    title: '30-minute power stack',
    description: 'Blend smoothie packs, pre-portion snacks, brew iced teas.',
  },
  {
    title: 'Grab-and-glow station',
    description: 'Keep washed herbs, sliced citrus, and crispy toppings within reach.',
  },
]

const Nutrition = () => {
  const [mealFilter, setMealFilter] = useState('All')
  const [dietFilter, setDietFilter] = useState('All')

  const filteredRecipes = useMemo(() => {
    return recipes.filter((recipe) => {
      const mealMatches = mealFilter === 'All' || recipe.mealType === mealFilter
      const dietMatches = dietFilter === 'All' || recipe.dietTags.includes(dietFilter)
      return mealMatches && dietMatches
    })
  }, [mealFilter, dietFilter])

  const macroSummary = useMemo(() => {
    const total = recipes.length || 1
    const aggregate = recipes.reduce(
      (acc, recipe) => {
        acc.protein += recipe.macros.protein
        acc.carbs += recipe.macros.carbs
        acc.fat += recipe.macros.fat
        return acc
      },
      { protein: 0, carbs: 0, fat: 0 },
    )
    return {
      protein: Math.round(aggregate.protein / total),
      carbs: Math.round(aggregate.carbs / total),
      fat: Math.round(aggregate.fat / total),
    }
  }, [])

  const mealBreakdown = useMemo(() => {
    return mealOptions
      .filter((meal) => meal !== 'All')
      .map((meal) => ({
        meal,
        count: recipes.filter((recipe) => recipe.mealType === meal).length,
      }))
  }, [])

  return (
    <div className="page">
      <section className="section nutrition-hero">
        <div>
          <p className="eyebrow">Nutrition lab</p>
          <h1>Chef-crafted plates that track with your training.</h1>
          <p className="lead">
            Refuel with recipes designed alongside coaches and dietitians. Each dish includes macro
            targets, prep rituals, and workout pairings to keep momentum effortless.
          </p>
          <div className="nutrition-stats">
            <div className="macro-card">
              <p className="muted">Avg. macro split</p>
              <h3>{macroSummary.protein}P / {macroSummary.carbs}C / {macroSummary.fat}F</h3>
              <small>Across the curated recipe board.</small>
            </div>
            {mealBreakdown.map((item) => (
              <div className="macro-card subtle" key={item.meal}>
                <p className="muted">{item.meal}</p>
                <h3>{item.count}</h3>
                <small>Recipes tailored for this window.</small>
              </div>
            ))}
          </div>
        </div>
        <div className="nutrition-panel hero">
          <div className="spotlight-card">
            <p className="muted">Seasonal focus</p>
            <h3>Citrus & adaptogens</h3>
            <p>
              Bright flavors layered with anti-inflammatory herbs support heavy training phases and
              travel resilience.
            </p>
          </div>
          <div className="spotlight-card">
            <p className="muted">Prep mantra</p>
            <p>“Batch once, plate beautifully all week.”</p>
            <small>— Chef Amara</small>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <div>
            <p className="eyebrow">Recipe board</p>
            <h2>Filter by meal moment or dietary preference.</h2>
            <p className="lead">Each recipe links to workouts matched to its macro profile.</p>
          </div>
        </div>
        <div className="filter-bar">
          <select value={mealFilter} onChange={(event) => setMealFilter(event.target.value)}>
            {mealOptions.map((meal) => (
              <option key={meal} value={meal}>
                {meal}
              </option>
            ))}
          </select>
          <select value={dietFilter} onChange={(event) => setDietFilter(event.target.value)}>
            {dietFilters.map((diet) => (
              <option key={diet} value={diet}>
                {diet}
              </option>
            ))}
          </select>
          <p className="muted filter-meta">{filteredRecipes.length} plates available</p>
        </div>

        <div className="card-grid recipe-grid-large">
          {filteredRecipes.map((recipe) => (
            <div className="recipe-card large" key={recipe.id}>
              <div className="recipe-card-top">
                <div>
                  <p className="muted">
                    {recipe.mealType} · {recipe.prepTime} min prep
                  </p>
                  <h3>{recipe.title}</h3>
                </div>
                <div className="calorie-pill">{recipe.calories} kcal</div>
              </div>
              <div className="diet-chip-row">
                {recipe.dietTags.map((tag) => (
                  <span className="diet-chip" key={`${recipe.id}-${tag}`}>
                    {tag}
                  </span>
                ))}
              </div>
              <p>{recipe.description}</p>
              <div className="macro-badges">
                <span>{recipe.macros.protein}g protein</span>
                <span>{recipe.macros.carbs}g carbs</span>
                <span>{recipe.macros.fat}g fat</span>
              </div>
              <div className="ingredients-block">
                <p className="muted">Ingredients</p>
                <ul>
                  {recipe.ingredients.map((ingredient) => (
                    <li key={ingredient}>{ingredient}</li>
                  ))}
                </ul>
                <small>{recipe.chefNote}</small>
              </div>
              <div className="pairing-list">
                <p className="muted">Pairs with</p>
                <div className="pairing-chips">
                  {recipe.pairingWorkouts.map((workoutId) => {
                    const workout = workouts.find((item) => item.id === workoutId)
                    return (
                      <span className="pairing-chip" key={workoutId}>
                        {workout?.title} · {workout?.duration} min
                      </span>
                    )
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section nutrition-insights">
        <div className="section-header">
          <div>
            <p className="eyebrow">Prep workflows</p>
            <h2>Systems that keep eating as intentional as training.</h2>
          </div>
        </div>
        <div className="chef-grid">
          {prepWorkflows.map((workflow) => (
            <div key={workflow.title} className="prep-card">
              <p className="muted">{workflow.title}</p>
              <h3>{workflow.description}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="section nutrition-lab">
        <div className="hydration-grid">
          {hydrationRituals.map((ritual) => (
            <div key={ritual.title} className="hydration-card">
              <p className="eyebrow">{ritual.title}</p>
              <p>{ritual.detail}</p>
              <small>{ritual.tip}</small>
            </div>
          ))}
        </div>
        <div className="lux-panel">
          <p className="eyebrow">Chef’s notes</p>
          <h3>Texture + temperature contrast keeps meals exciting.</h3>
          <p>
            Layer something crisp with something creamy. Finish plates with chilled herbs or warm
            dressings to keep your nervous system engaged and satisfied.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Nutrition
