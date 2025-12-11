export type Workout = {
  id: string
  slug: string
  title: string
  duration: number
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  intensity: 'Low' | 'Moderate' | 'High'
  equipment: string[]
  calories: number
  focus: string
  muscles: string[]
  summary: string
  heroImage: string
  tags: string[]
  steps: string[]
  coachNote: string
  playlist: string
  nutrition: {
    pre: string
    post: string
    hydration: string
    pairing: string
  }
}

export type Recipe = {
  id: string
  title: string
  mealType: 'Breakfast' | 'Lunch' | 'Dinner' | 'Snack' | 'Recovery'
  dietTags: string[]
  calories: number
  prepTime: number
  description: string
  macros: {
    protein: number
    carbs: number
    fat: number
  }
  ingredients: string[]
  chefNote: string
  pairingWorkouts: string[]
}

export type CoachTip = {
  title: string
  author: string
  message: string
  action: string
}

export type CommunityStat = {
  label: string
  value: string
  detail: string
}

export type EditorialHighlight = {
  title: string
  summary: string
  linkLabel: string
}

export type ProgressRecommendation = {
  title: string
  detail: string
  action: string
}

export const workouts: Workout[] = [
  {
    id: 'ignite-hiit',
    slug: 'ignite-hiit-30',
    title: 'Ignite HIIT 30',
    duration: 30,
    difficulty: 'Intermediate',
    intensity: 'High',
    equipment: ['Mat', 'Dumbbells'],
    calories: 340,
    focus: 'Total Body',
    muscles: ['Legs', 'Core', 'Shoulders'],
    summary:
      'Explosive 30-minute interval session that rotates plyometrics, weighted power moves, and core finishers for a full metabolic push.',
    heroImage:
      'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80',
    tags: ['HIIT', 'Power', 'Sweat'],
    steps: [
      'Dynamic warm-up with mobility flows (4 mins)',
      'Four rounds of 40s work / 20s rest compound circuits',
      'Core finisher ladder and guided cooldown stretch',
    ],
    coachNote:
      'Use RPE scale to stay honest—rounds three and four should feel like an 8/10 effort without breaking form.',
    playlist: 'https://open.spotify.com/playlist/1hiitPulse',
    nutrition: {
      pre: 'Medjool dates with nut butter 30 minutes before for fast carbs + fat.',
      post: 'Refuel with the Citrus Recharge Bowl to replenish glycogen.',
      hydration: 'Sip 500ml of water with electrolytes throughout.',
      pairing: 'Citrus Recharge Bowl',
    },
  },
  {
    id: 'sculpt-flow',
    slug: 'sculpt-flow-45',
    title: 'Sculpt Flow 45',
    duration: 45,
    difficulty: 'Intermediate',
    intensity: 'Moderate',
    equipment: ['Light Weights', 'Resistance Band'],
    calories: 420,
    focus: 'Strength & Mobility',
    muscles: ['Glutes', 'Back', 'Core'],
    summary:
      'Slow-controlled tempo strength paired with breath-led flows to sculpt lean muscle and improve mobility.',
    heroImage:
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80',
    tags: ['Strength', 'Mobility', 'Mindful'],
    steps: [
      'Breath primer and joint articulation routine',
      'Tri-sets alternating push/pull chains with time-under-tension focus',
      'Band-assisted mobility flows and parasympathetic cooldown',
    ],
    coachNote:
      'Stay in nasal breathing for the first half to downshift stress hormones before loading heavier sets.',
    playlist: 'https://open.spotify.com/playlist/1sculptflow',
    nutrition: {
      pre: 'Greek yogurt parfait with berries for balanced macros.',
      post: 'Recovery Miso Bowl to rebuild muscle tissue.',
      hydration: 'Warm ginger tea supports digestion post-workout.',
      pairing: 'Recovery Miso Bowl',
    },
  },
  {
    id: 'sunrise-ride',
    slug: 'sunrise-ride-20',
    title: 'Sunrise Ride 20',
    duration: 20,
    difficulty: 'Beginner',
    intensity: 'Moderate',
    equipment: ['Bike'],
    calories: 220,
    focus: 'Cardio & Endurance',
    muscles: ['Legs', 'Cardio'],
    summary:
      'Low-impact interval ride crafted for busy mornings with guided breathwork and cadence cues.',
    heroImage:
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80',
    tags: ['Cycling', 'Low Impact', 'Morning'],
    steps: [
      'Cadenced warm-up with seated climbs',
      'Interval ladder with rising resistance and speed surges',
      'Breath led recovery and gratitude prompt',
    ],
    coachNote:
      'Keep shoulders relaxed and pin gaze to horizon—posture helps your breathing stay rhythmic.',
    playlist: 'https://open.spotify.com/playlist/1sunrisewave',
    nutrition: {
      pre: 'Banana espresso smoothie for caffeine + potassium.',
      post: 'Hydrating Green Glow Juice within 30 mins.',
      hydration: 'Add sea salt to water to replace sweat minerals.',
      pairing: 'Green Glow Juice',
    },
  },
  {
    id: 'elevate-core',
    slug: 'elevate-core-25',
    title: 'Elevate Core 25',
    duration: 25,
    difficulty: 'Beginner',
    intensity: 'Low',
    equipment: ['Mat', 'Sliders'],
    calories: 180,
    focus: 'Core Stability',
    muscles: ['Core', 'Posture'],
    summary:
      'Mat-based session that layers anti-rotation, breathwork, and posture resets to elevate daily movement.',
    heroImage:
      'https://images.unsplash.com/photo-1549476464-37392f717541?auto=format&fit=crop&w=1200&q=80',
    tags: ['Core', 'Mobility', 'Mindful'],
    steps: [
      'Diaphragmatic breathing and spinal articulation warm-up',
      'Three progressive core circuits with sliders and tempo holds',
      'Box-breathing finisher and postural resets',
    ],
    coachNote:
      'Squeeze exhale through pursed lips during slider tucks—the slower tempo increases deep core engagement.',
    playlist: 'https://open.spotify.com/playlist/1elevatecore',
    nutrition: {
      pre: 'Coconut water and handful of almonds to avoid heaviness.',
      post: 'Power Greens Frittata to reinforce lean protein intake.',
      hydration: 'Chamomile infused water calms nervous system post-session.',
      pairing: 'Power Greens Frittata',
    },
  },
  {
    id: 'lunar-restore',
    slug: 'lunar-restore-60',
    title: 'Lunar Restore 60',
    duration: 60,
    difficulty: 'Beginner',
    intensity: 'Low',
    equipment: ['Bolster', 'Blocks'],
    calories: 160,
    focus: 'Recovery & Breathwork',
    muscles: ['Hips', 'Fascia', 'Nervous System'],
    summary:
      'Yin-inspired practice blending fascia release, guided journaling, and box breathing to clear stress before rest.',
    heroImage:
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80&sat=-30',
    tags: ['Restorative', 'Breath', 'Night'],
    steps: [
      'Somatic shake-out and supported child’s pose grounding',
      'Three-pass fascia release series with passive hip openers',
      'Visualization, journaling cue, and yoga nidra finale',
    ],
    coachNote:
      'Keep the room dim, wear socks, and stack blankets under knees—comfort is the point so your nervous system lets go.',
    playlist: 'https://open.spotify.com/playlist/1lunarrestore',
    nutrition: {
      pre: 'Golden Turmeric Latte 45 minutes before to wind down digestion.',
      post: 'Sip more latte or chamomile to extend the parasympathetic state.',
      hydration: 'Add magnesium powder to your nightly water bottle.',
      pairing: 'Golden Turmeric Latte',
    },
  },
  {
    id: 'vertex-push',
    slug: 'vertex-push-50',
    title: 'Vertex Push 50',
    duration: 50,
    difficulty: 'Advanced',
    intensity: 'High',
    equipment: ['Barbell', 'Kettlebell', 'Bench'],
    calories: 520,
    focus: 'Upper Body Strength',
    muscles: ['Chest', 'Back', 'Arms'],
    summary:
      'Power circuits layering heavy push/pull complexes with rotational core finishers and neuromuscular drills.',
    heroImage:
      'https://images.unsplash.com/photo-1434682881908-b43d0467b798?auto=format&fit=crop&w=1200&q=80',
    tags: ['Strength', 'Athletic', 'Upper Body'],
    steps: [
      'Contrast warm-up with tempo push-ups and band pull-aparts',
      'Five sets of heavy complexes plus unilateral kettlebell presses',
      'Rotational med-ball work and parasympathetic cooldown',
    ],
    coachNote:
      'Use cluster sets (2 reps, breathe, 2 reps) on the final barbell push to maintain power output.',
    playlist: 'https://open.spotify.com/playlist/1vertexpush',
    nutrition: {
      pre: 'Half serving overnight oats + espresso shot for steady fuel.',
      post: 'Ginger Sesame Power Bowl within 45 minutes for muscle repair.',
      hydration: 'Add creatine to your shaker and finish by session end.',
      pairing: 'Ginger Sesame Power Bowl',
    },
  },
  {
    id: 'momentum-sprint',
    slug: 'momentum-sprint-35',
    title: 'Momentum Sprint 35',
    duration: 35,
    difficulty: 'Intermediate',
    intensity: 'High',
    equipment: ['Treadmill'],
    calories: 410,
    focus: 'Speed & Conditioning',
    muscles: ['Legs', 'Cardio', 'Core'],
    summary:
      'Track-inspired treadmill session alternating incline pushes and anaerobic sprint ladders to spike VO₂ max.',
    heroImage:
      'https://images.unsplash.com/photo-1509223197845-458d87318791?auto=format&fit=crop&w=1200&q=80',
    tags: ['Run', 'Intervals', 'Cardio'],
    steps: [
      'Rolling warm-up with cadence drills and quick strides',
      'Progressive incline stack paired with descending sprint ladder',
      'Aerobic flush and guided box-breath cooldown',
    ],
    coachNote:
      'Cap your max sprint at 90% effort so you can maintain form—quality beats raw speed for sustainable progress.',
    playlist: 'https://open.spotify.com/playlist/1momentumsprint',
    nutrition: {
      pre: 'Chia berry shake 45 minutes before primes fast carbs.',
      post: 'Sip Glow Hydration and eat the Berry Chia Shake leftovers.',
      hydration: 'Add sea salt + coconut water base for electrolytes.',
      pairing: 'Berry Chia Recovery Shake',
    },
  },
  {
    id: 'atlas-lower',
    slug: 'atlas-lower-55',
    title: 'Atlas Lower 55',
    duration: 55,
    difficulty: 'Advanced',
    intensity: 'High',
    equipment: ['Barbell', 'Trap Bar', 'Bands'],
    calories: 560,
    focus: 'Lower Body Strength',
    muscles: ['Glutes', 'Hamstrings', 'Quads'],
    summary:
      'Heavy tempo strength block featuring contrast sets, unilateral power, and iso-hold finishers for total lower dominance.',
    heroImage:
      'https://images.unsplash.com/photo-1487956382158-bb926046304a?auto=format&fit=crop&w=1200&q=80',
    tags: ['Strength', 'Lower', 'Athletic'],
    steps: [
      'Ankling drills and barbell RDL warm-up complexes',
      'Trap-bar deadlift waves paired with plyometric bounds',
      'Split-squat ladder, Nordic curls, and isometric wall sits',
    ],
    coachNote:
      'Rotate foot pressure every set: heel-heavy for posterior chain, midfoot for quad bias.',
    playlist: 'https://open.spotify.com/playlist/1atlaslower',
    nutrition: {
      pre: 'Half sweet potato with nut butter and honey 60 minutes prior.',
      post: 'Smoky Sweet Potato Bowl keeps glycogen topped and inflammation low.',
      hydration: 'Mix 5g creatine + electrolytes in 750ml of water.',
      pairing: 'Smoky Sweet Potato Bowl',
    },
  },
  {
    id: 'halo-mobility',
    slug: 'halo-mobility-30',
    title: 'Halo Mobility 30',
    duration: 30,
    difficulty: 'Beginner',
    intensity: 'Low',
    equipment: ['Mat', 'Foam Roller', 'Light Kettlebell'],
    calories: 150,
    focus: 'Mobility & Core',
    muscles: ['Shoulders', 'Spine', 'Core'],
    summary:
      'Flow-based mobility class blending kettlebell halos, spinal waves, and breath-led core to reset posture.',
    heroImage:
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80&sat=-70',
    tags: ['Mobility', 'Recovery', 'Posture'],
    steps: [
      'Soft tissue priming with roller and thoracic extensions',
      'Progressive kettlebell halo and windmill sequence',
      'Loaded cat-cow, prone swimmers, and diaphragmatic closer',
    ],
    coachNote:
      'Move halos slow enough to feel shoulder blades glide—speed hides the sticky spots you’re trying to open.',
    playlist: 'https://open.spotify.com/playlist/1halomobility',
    nutrition: {
      pre: 'Matcha Oat Energizer 30 minutes prior for calm focus.',
      post: 'Keep it light with citrus salad if stacking a later session.',
      hydration: 'Herbal tea with pinch of sea salt to keep minerals topped.',
      pairing: 'Matcha Oat Energizer',
    },
  },
  {
    id: 'aqua-pulse',
    slug: 'aqua-pulse-40',
    title: 'Aqua Pulse 40',
    duration: 40,
    difficulty: 'Intermediate',
    intensity: 'Moderate',
    equipment: ['Pool', 'Water Dumbbells'],
    calories: 300,
    focus: 'Recovery Cardio',
    muscles: ['Full Body', 'Cardio'],
    summary:
      'Low-impact aquatic cardio combining interval jogs, resistance pushes, and breathing drills for joint-friendly conditioning.',
    heroImage:
      'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=1200&q=80',
    tags: ['Pool', 'Recovery', 'Cardio'],
    steps: [
      'Water walking warm-up with rotational reaches',
      'Intervals of pool sprints, tuck jumps, and resistance pushes',
      'Floating breathwork and shoulder mobility cooldown',
    ],
    coachNote:
      'Press palms into water to create resistance; the harder you push, the more strength you build without joint stress.',
    playlist: 'https://open.spotify.com/playlist/1aquapulse',
    nutrition: {
      pre: 'Citrus Herb Crunch Salad keeps you light before pool work.',
      post: 'Hydrate with Green Glow Juice plus pinch of Himalayan salt.',
      hydration: 'Bring electrolyte tablet since you may not notice sweat.',
      pairing: 'Citrus Herb Crunch Salad',
    },
  },
  {
    id: 'summit-flow',
    slug: 'summit-flow-50',
    title: 'Summit Flow 50',
    duration: 50,
    difficulty: 'Intermediate',
    intensity: 'Moderate',
    equipment: ['Mat', 'Blocks'],
    calories: 380,
    focus: 'Strength & Mobility',
    muscles: ['Legs', 'Back', 'Core'],
    summary:
      'Athletic vinyasa flow weaving power poses, isometric strength, and mobility waves inspired by alpine climbs.',
    heroImage:
      'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=80',
    tags: ['Flow', 'Strength', 'Mobility'],
    steps: [
      'Breath-anchored warm-up and primal squats',
      'Three sequences alternating lunges, binds, and crow progressions',
      'Slow ladder cool down with spinal waves',
    ],
    coachNote:
      'Push-pull through your fingertips to activate lats during every chaturanga; the upper body engagement keeps the flow stable.',
    playlist: 'https://open.spotify.com/playlist/1summitflow',
    nutrition: {
      pre: 'Savory Power Oats for steady carbs without a crash.',
      post: 'Mediterranean Fuel Wrap within an hour balances macros.',
      hydration: 'Add adaptogens to herbal tea post-flow to calm the nervous system.',
      pairing: 'Mediterranean Fuel Wrap',
    },
  },
  {
    id: 'ember-core',
    slug: 'ember-core-20',
    title: 'Ember Core 20',
    duration: 20,
    difficulty: 'Beginner',
    intensity: 'Moderate',
    equipment: ['Mat'],
    calories: 160,
    focus: 'Core & Breath',
    muscles: ['Core', 'Hips'],
    summary:
      'Short, precise core series mixing pilates pulses, oblique rotation, and breath holds for a fiery reset.',
    heroImage:
      'https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=1200&q=80',
    tags: ['Core', 'Pilates', 'Quick'],
    steps: [
      'Posterior chain activation and 90/90 breathing',
      'Three mini circuits of pilates pulses and hollow holds',
      'Slow oblique twists and supported supported extension',
    ],
    coachNote:
      'Keep ribs stacked over hips during every pulse; shifting weight forward lights up obliques faster.',
    playlist: 'https://open.spotify.com/playlist/1embercore',
    nutrition: {
      pre: 'Matcha Oat Energizer keeps energy smooth without heaviness.',
      post: 'Cacao Recovery Mousse provides healthy fats for hormone support.',
      hydration: 'Lemon water with pinch of salt keeps muscles primed.',
      pairing: 'Cacao Recovery Mousse',
    },
  },
  {
    id: 'zenith-ride',
    slug: 'zenith-ride-45',
    title: 'Zenith Ride 45',
    duration: 45,
    difficulty: 'Advanced',
    intensity: 'High',
    equipment: ['Bike'],
    calories: 480,
    focus: 'Cardio & Power',
    muscles: ['Legs', 'Cardio', 'Core'],
    summary:
      'High-tempo cycling ride tackling hill surges, sprint pyramids, and cadence drills set to cinematic beats.',
    heroImage:
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80',
    tags: ['Cycling', 'Power', 'Endurance'],
    steps: [
      'Cadence drills and single-leg spins',
      'Sprint pyramid paired with standing climbs',
      'Low-cadence hill grind and breath-based recovery',
    ],
    coachNote:
      'Hold hips level during standing climbs—front foot pressure should match back foot to protect knees.',
    playlist: 'https://open.spotify.com/playlist/1zenithride',
    nutrition: {
      pre: 'Berry Chia Recovery Shake 30 minutes before primes glycogen.',
      post: 'Phoenix Glow Bowl gives antioxidants to calm inflammation.',
      hydration: 'Alternate between electrolyte mix and plain water every other song.',
      pairing: 'Phoenix Glow Bowl',
    },
  },
]

export const recipes: Recipe[] = [
  {
    id: 'citrus-bowl',
    title: 'Citrus Recharge Bowl',
    mealType: 'Breakfast',
    dietTags: ['Vegetarian', 'Gluten-Free'],
    calories: 420,
    prepTime: 12,
    description:
      'Orange segments, quinoa crunch, coconut yogurt, and mint layered with chia-lime dressing.',
    macros: { protein: 18, carbs: 58, fat: 14 },
    ingredients: [
      '1 cup coconut yogurt',
      '1/2 cup cooked quinoa',
      '1 orange segmented',
      '1 tbsp chia seeds',
      'Fresh mint',
    ],
    chefNote: 'Add lime zest just before serving so aromatics stay vivid.',
    pairingWorkouts: ['ignite-hiit'],
  },
  {
    id: 'miso-bowl',
    title: 'Recovery Miso Bowl',
    mealType: 'Dinner',
    dietTags: ['High-Protein'],
    calories: 510,
    prepTime: 25,
    description:
      'Savory miso broth poured over soba noodles, sesame salmon, and blistered greens.',
    macros: { protein: 36, carbs: 46, fat: 18 },
    ingredients: [
      '4 cups bone broth',
      '2 tbsp white miso',
      '120g salmon',
      '1 bundle soba noodles',
      'Sesame oil + greens',
    ],
    chefNote: 'Keep broth below a simmer once miso is in to protect probiotics.',
    pairingWorkouts: ['sculpt-flow'],
  },
  {
    id: 'green-juice',
    title: 'Green Glow Juice',
    mealType: 'Recovery',
    dietTags: ['Vegan'],
    calories: 110,
    prepTime: 8,
    description:
      'Cold-pressed cucumber, pineapple, spinach, aloe, and lime with a pinch of sea salt.',
    macros: { protein: 3, carbs: 24, fat: 1 },
    ingredients: [
      '1 cucumber',
      '1 cup pineapple',
      '1 handful spinach',
      '1 tbsp aloe gel',
      'Juice of 1 lime',
    ],
    chefNote: 'Stir in chia seeds if you need extra satiety on commute days.',
    pairingWorkouts: ['sunrise-ride'],
  },
  {
    id: 'greens-frittata',
    title: 'Power Greens Frittata',
    mealType: 'Lunch',
    dietTags: ['Low-Carb'],
    calories: 360,
    prepTime: 20,
    description:
      'Cage-free eggs baked with kale, broccolini, goat cheese, and roasted tomatoes.',
    macros: { protein: 29, carbs: 18, fat: 21 },
    ingredients: [
      '4 eggs + 2 egg whites',
      '1 cup chopped kale',
      '1/2 cup broccolini',
      '40g goat cheese',
      'Slow-roasted tomatoes',
    ],
    chefNote: 'Bake low and slow (325°F) to keep texture custardy.',
    pairingWorkouts: ['elevate-core'],
  },
  {
    id: 'turmeric-latte',
    title: 'Golden Turmeric Latte',
    mealType: 'Snack',
    dietTags: ['Vegan'],
    calories: 180,
    prepTime: 10,
    description:
      'Steamed oat milk infused with turmeric, ginger, cinnamon, and vanilla bean.',
    macros: { protein: 4, carbs: 20, fat: 9 },
    ingredients: [
      '1 cup oat milk',
      '1 tsp turmeric + pinch pepper',
      'Fresh ginger coin',
      '1/2 tsp cinnamon',
      'Drop vanilla',
    ],
    chefNote: 'Blend with coconut butter for extra creaminess before bed.',
    pairingWorkouts: ['lunar-restore'],
  },
  {
    id: 'ginger-bowl',
    title: 'Ginger Sesame Power Bowl',
    mealType: 'Dinner',
    dietTags: ['High-Protein'],
    calories: 590,
    prepTime: 30,
    description:
      'Forbidden rice layered with miso chicken, pickled carrots, shaved cucumbers, and sesame crunch.',
    macros: { protein: 42, carbs: 55, fat: 19 },
    ingredients: [
      '150g chicken thighs',
      '1 cup forbidden rice',
      'Pickled carrots',
      'Cucumber ribbons',
      'Sesame crunch + miso dressing',
    ],
    chefNote: 'Double the dressing and keep on standby for salads all week.',
    pairingWorkouts: ['vertex-push'],
  },
  {
    id: 'berry-shake',
    title: 'Berry Chia Recovery Shake',
    mealType: 'Recovery',
    dietTags: ['Vegan', 'Gluten-Free'],
    calories: 320,
    prepTime: 7,
    description:
      'Frozen berries blended with coconut water, chia seeds, collagen peptides (optional), and citrus zest.',
    macros: { protein: 18, carbs: 48, fat: 8 },
    ingredients: [
      '1 cup frozen berries',
      '1 cup coconut water',
      '1 tbsp chia seeds',
      '1 scoop collagen (optional)',
      'Zest of half an orange',
    ],
    chefNote: 'Blend once, rest 2 minutes, then pulse again—chia thickens quickly.',
    pairingWorkouts: ['momentum-sprint'],
  },
  {
    id: 'smoky-sweet-bowl',
    title: 'Smoky Sweet Potato Bowl',
    mealType: 'Dinner',
    dietTags: ['Gluten-Free'],
    calories: 540,
    prepTime: 35,
    description:
      'Charred sweet potatoes, roasted chickpeas, garlicky kale, and tahini chili drizzle.',
    macros: { protein: 26, carbs: 62, fat: 20 },
    ingredients: [
      '2 cups cubed sweet potatoes',
      '1 cup chickpeas',
      '2 cups kale',
      'Smoked paprika + garlic',
      'Tahini chili sauce',
    ],
    chefNote: 'Finish potatoes under broiler for smoky caramelized edges.',
    pairingWorkouts: ['atlas-lower'],
  },
  {
    id: 'matcha-oat-bar',
    title: 'Matcha Oat Energizer',
    mealType: 'Snack',
    dietTags: ['Vegetarian'],
    calories: 260,
    prepTime: 15,
    description:
      'No-bake matcha oat bars with almond butter, hemp seeds, and dark chocolate drizzle.',
    macros: { protein: 12, carbs: 28, fat: 11 },
    ingredients: [
      '1 cup rolled oats',
      '2 tbsp matcha powder',
      '1/2 cup almond butter',
      '2 tbsp hemp seeds',
      'Dark chocolate drizzle',
    ],
    chefNote: 'Press into silicone mold for perfect edges and chill 30 minutes.',
    pairingWorkouts: ['halo-mobility'],
  },
  {
    id: 'citrus-herb-salad',
    title: 'Citrus Herb Crunch Salad',
    mealType: 'Lunch',
    dietTags: ['Vegan'],
    calories: 380,
    prepTime: 18,
    description:
      'Shaved fennel, grapefruit, herbs, crispy quinoa, and avocado finished with lime olive oil.',
    macros: { protein: 12, carbs: 32, fat: 22 },
    ingredients: [
      '1 bulb shaved fennel',
      '1 grapefruit segmented',
      '1/2 avocado',
      '1/2 cup crispy quinoa',
      'Mint + cilantro + lime oil',
    ],
    chefNote: 'Keep herbs on stems until plating to prevent wilting.',
    pairingWorkouts: ['aqua-pulse', 'halo-mobility'],
  },
  {
    id: 'savory-oats',
    title: 'Savory Power Oats',
    mealType: 'Breakfast',
    dietTags: ['Vegetarian', 'High-Protein'],
    calories: 430,
    prepTime: 15,
    description:
      'Steel-cut oats folded with miso butter, spinach, soft eggs, and crunchy seeds for a warming morning plate.',
    macros: { protein: 24, carbs: 48, fat: 16 },
    ingredients: [
      '1 cup cooked steel-cut oats',
      '1 tsp miso butter',
      '2 cups spinach',
      '1 soft-boiled egg',
      'Toasted pumpkin + sesame seeds',
    ],
    chefNote: 'Finish with chili crunch for heat and texture.',
    pairingWorkouts: ['sculpt-flow', 'ignite-hiit'],
  },
  {
    id: 'mediterranean-wrap',
    title: 'Mediterranean Fuel Wrap',
    mealType: 'Lunch',
    dietTags: ['High-Protein'],
    calories: 520,
    prepTime: 22,
    description:
      'Whole-grain lavash layered with herb chicken, lemon tahini spread, crunchy veggies, and pickled onions.',
    macros: { protein: 38, carbs: 54, fat: 18 },
    ingredients: [
      '1 lavash wrap',
      '120g herb chicken',
      'Lemon tahini spread',
      'Shaved cucumber + pepper',
      'Pickled onion + arugula',
    ],
    chefNote: 'Wrap in parchment and sear both sides for cafe-level crisp.',
    pairingWorkouts: ['vertex-push', 'atlas-lower'],
  },
  {
    id: 'cacao-mousse',
    title: 'Cacao Recovery Mousse',
    mealType: 'Snack',
    dietTags: ['Vegan', 'Gluten-Free'],
    calories: 280,
    prepTime: 12,
    description:
      'Silky avocado cacao mousse topped with salted almond crumble and espresso dust.',
    macros: { protein: 8, carbs: 26, fat: 18 },
    ingredients: [
      '1 ripe avocado',
      '2 tbsp cacao powder',
      '1 tbsp maple syrup',
      'Splash espresso',
      'Almond crumble topping',
    ],
    chefNote: 'Chill for 20 minutes for a firmer, dessert-like set.',
    pairingWorkouts: ['momentum-sprint', 'halo-mobility'],
  },
  {
    id: 'phoenix-bowl',
    title: 'Phoenix Glow Bowl',
    mealType: 'Dinner',
    dietTags: ['Vegan'],
    calories: 560,
    prepTime: 28,
    description:
      'Turmeric rice, roasted cauliflower, harissa chickpeas, and citrus-dressed greens with pomegranate crunch.',
    macros: { protein: 22, carbs: 70, fat: 18 },
    ingredients: [
      '1 cup turmeric rice',
      'Roasted cauliflower florets',
      'Harissa chickpeas',
      'Baby greens + citrus dressing',
      'Pomegranate + pistachio crunch',
    ],
    chefNote: 'Serve with a dollop of coconut yogurt to cool the harissa heat.',
    pairingWorkouts: ['ignite-hiit', 'aqua-pulse'],
  },
]

export const testimonials = [
  {
    id: 't1',
    name: 'Maya N.',
    quote:
      'In four weeks I built a cadence that feels effortless. The nutrition guidance makes recovery automatic.',
  },
  {
    id: 't2',
    name: 'Alex R.',
    quote:
      'The workouts are cinematic and precise. Progress tracker keeps me accountable with gentle nudges.',
  },
  {
    id: 't3',
    name: 'Rafa B.',
    quote:
      'Filters make it easy to plan around my climbing sessions. Seeing recipes next to workouts is underrated magic.',
  },
  {
    id: 't4',
    name: 'Sydney W.',
    quote:
      'I finally respect rest days because Lunar Restore feels like a luxury ritual instead of a checkbox.',
  },
]

export const weeklyPlan = [
  {
    day: 'Monday',
    workout: 'Ignite HIIT 30',
    nutrition: 'Citrus Recharge Bowl',
    note: 'Aim for 7 hours of sleep tonight to optimize recovery.',
  },
  {
    day: 'Tuesday',
    workout: 'Sculpt Flow 45',
    nutrition: 'Recovery Miso Bowl',
    note: 'Balance macros at 40/30/30 split today.',
  },
  {
    day: 'Wednesday',
    workout: 'Sunrise Ride 20',
    nutrition: 'Green Glow Juice',
    note: 'Stack mobility session in evening if energy allows.',
  },
  {
    day: 'Thursday',
    workout: 'Elevate Core 25',
    nutrition: 'Power Greens Frittata',
    note: 'Prioritize posture resets after meetings.',
  },
  {
    day: 'Friday',
    workout: 'Momentum Sprint 35',
    nutrition: 'Berry Chia Recovery Shake',
    note: 'Keep heart rate under threshold for last ladder to retain quality.',
  },
  {
    day: 'Saturday',
    workout: 'Atlas Lower 55',
    nutrition: 'Smoky Sweet Potato Bowl',
    note: 'Schedule longer mobility session afterward to keep hips open.',
  },
  {
    day: 'Sunday',
    workout: 'Lunar Restore 60',
    nutrition: 'Golden Turmeric Latte',
    note: 'Lights out by 10:30 PM for quality REM cycles.',
  },
]

export const nutritionSpotlights = [
  {
    title: 'Fuel Focus: Balanced Breakfasts',
    description:
      'Layer complex carbs, lean protein, and vibrant micronutrients to keep energy stable through morning training.',
  },
  {
    title: 'Hydration Rituals',
    description:
      'Electrolyte infusions and adaptogenic teas align with the intensity of your day.',
  },
  {
    title: 'Seasonal Micros',
    description:
      'Micro-dosed greens powder + citrus keeps immunity resilient during travel weeks.',
  },
]

export const coachTips: CoachTip[] = [
  {
    title: 'Coach’s Tip',
    author: 'Coach Alina',
    message: 'Anchor your week with two intense sessions max—fill the rest with quality mobility.',
    action: 'Stack Sculpt Flow after HIIT for contrast training.',
  },
  {
    title: 'Recovery Reminder',
    author: 'Coach Malik',
    message: 'Slow exhales before bed drop resting heart rate by 5–8 bpm.',
    action: 'Practice box breathing from Lunar Restore even on lifting days.',
  },
]

export const communityStats: CommunityStat[] = [
  {
    label: 'Members programming weekly',
    value: '42k',
    detail: 'Across 92 countries with full remote support.',
  },
  {
    label: 'Avg. completion rate',
    value: '87%',
    detail: 'Nutrition pairings keep adherence high.',
  },
  {
    label: 'Recipes per block',
    value: '60+',
    detail: 'Seasonally updated by our culinary team.',
  },
]

export const editorialHighlights: EditorialHighlight[] = [
  {
    title: 'Coach’s Corner: How to cycle intensity',
    summary:
      'Use microcycles that undulate between push, hold, and deload weeks so progress feels sustainable.',
    linkLabel: 'Read guide',
  },
  {
    title: 'Nutrition Note: Hydrate like an athlete',
    summary:
      'Balancing sodium, potassium, and adaptogens increases absorption without the sugar crash.',
    linkLabel: 'View rituals',
  },
]

export const progressInsights = [
  {
    title: 'Streak',
    value: '8 days',
    detail: 'You are beating 92% of the community this week.',
  },
  {
    title: 'Energy Balance',
    value: '+320 kcal',
    detail: 'Nutrition pairings kept you in a slight surplus for muscle growth.',
  },
  {
    title: 'Focus Mix',
    value: '42% Strength / 33% Cardio / 25% Recovery',
    detail: 'Solid balance. Add mobility on Sunday to round it out.',
  },
  {
    title: 'Sleep Quality',
    value: '7h 18m avg',
    detail: 'Your readiness improves 9% when sleep stays above 7h.',
  },
]

export const progressRecommendations: ProgressRecommendation[] = [
  {
    title: 'Dial up protein',
    detail: 'You hit 0.7g per lb on average—aim for 0.9g to support muscle repair.',
    action: 'Add greek yogurt parfait to Tuesday breakfast.',
  },
  {
    title: 'Balance lower/upper',
    detail: 'Three lower-body sessions this week—add Vertex Push or Elevate Core to offset.',
    action: 'Swap Thursday slot to Vertex Push primer sets.',
  },
]
