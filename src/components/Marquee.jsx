import { marquee } from '../data/content.js'
import './Marquee.css'

export default function Marquee() {
  const row = [...marquee, ...marquee]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {row.map((word, i) => (
          <span className="marquee__item" key={i}>
            {word}
            <span className="marquee__star">◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}
