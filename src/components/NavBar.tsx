import { Link, useLocation } from 'react-router-dom'

const links = [
  { to: '/', label: 'ホーム' },
  { to: '/cafe', label: '☕ コラボカフェ' },
]

export default function NavBar() {
  const { pathname } = useLocation()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-100 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="text-2xl">🐱</span>
          <span className="font-bold text-lg text-pink-500 group-hover:text-pink-600 transition-colors">
            ねこみぞレシピ
          </span>
        </Link>
        <nav className="flex items-center gap-1">
          {links.map(({ to, label }) => {
            const active = pathname === to || (to !== '/' && pathname.startsWith(to))
            return (
              <Link
                key={to}
                to={to}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  active
                    ? 'bg-pink-100 text-pink-600'
                    : 'text-gray-500 hover:bg-pink-50 hover:text-pink-500'
                }`}
              >
                {label}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
