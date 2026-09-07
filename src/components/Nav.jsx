import { useEffect, useState } from 'react'
import { site, nav } from '../data/content.js'
import './Nav.css'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#top" className="nav__logo">
          <span className="nav__logo-mark">{site.monogram}</span>
          <span className="nav__logo-sub">
            {site.nameCn} · {site.roles.join(' / ')}
          </span>
        </a>

        <nav className="nav__links">
          {nav.map((item, i) => (
            <a key={item.href} href={item.href} className="nav__link">
              <span className="nav__link-index">0{i + 1}</span>
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="btn btn--solid nav__cta">
          联系我 <span className="btn__arrow">↗</span>
        </a>
      </div>
    </header>
  )
}
