import { Route, Routes, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import './App.css'
import About from './pages/About'
import Home from './pages/Home'
import Nutrition from './pages/Nutrition'
import Progress from './pages/Progress'
import WorkoutDetail from './pages/WorkoutDetail'
import Workouts from './pages/Workouts'
import { PrivacyPage, TermsPage } from './pages/InfoPages'
import { useEffect } from 'react'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/workouts/:slug" element={<WorkoutDetail />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
