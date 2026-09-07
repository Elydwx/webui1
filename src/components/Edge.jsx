import { edge } from '../data/content.js'
import './Edge.css'

const ICONS = {
  brand: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="7.25" />
      <rect x="13" y="13" width="14" height="14" />
    </svg>
  ),
  ai: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M16 3v26M3 16h26" />
      <path d="M7 7l18 18M25 7L7 25" />
      <circle cx="16" cy="16" r="5.25" />
    </svg>
  ),
  code: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M11 9l-7 7 7 7M21 9l7 7-7 7M18.5 5l-5 22" />
    </svg>
  ),
  collab: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="11" cy="13" r="5.25" />
      <circle cx="21" cy="19" r="5.25" />
    </svg>
  ),
}

export default function Edge() {
  return (
    <section className="section edge" id="edge">
      <div className="container">
        <header className="sec-head" data-io>
          <span className="sec-head__ghost" data-plx="-0.07" data-plx-max="46">
            <i>EDGE</i>
          </span>
          <div className="sec-head__left">
            <span className="sec-head__index">/{edge.index}</span>
            <h2 className="sec-head__title">
              <span className="sec-head__title-inner">{edge.titleCn}</span>
            </h2>
          </div>
          <span className="sec-head__en">{edge.titleEn}</span>
        </header>

        <ul className="edge__grid">
          {edge.items.map((item, i) => (
            <li
              className={`edge-card ${i === 1 ? 'edge-card--active' : ''}`}
              key={item.no}
              data-io
              style={{ '--d': `${i * 0.14}s` }}
            >
              <div className="edge-card__top">
                <span className="edge-card__icon">{ICONS[item.icon]}</span>
                <span className="edge-card__no">{item.no}</span>
              </div>
              <div className="edge-card__titles">
                <h3 className="edge-card__cn">{item.titleCn}</h3>
                <span className="mono-label">{item.titleEn}</span>
              </div>
              <p className="edge-card__desc">{item.desc}</p>
              <span className="edge-card__line" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
