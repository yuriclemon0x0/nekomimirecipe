import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import OCDetail from './pages/OCDetail'
import CafeIndex from './pages/CafeIndex'
import CafeDetail from './pages/CafeDetail'

export default function App() {
  return (
    <div className="min-h-screen bg-cream font-sans text-gray-700">
      <NavBar />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/oc/:id" element={<OCDetail />} />
          <Route path="/cafe" element={<CafeIndex />} />
          <Route path="/cafe/:id" element={<CafeDetail />} />
        </Routes>
      </main>
    </div>
  )
}
