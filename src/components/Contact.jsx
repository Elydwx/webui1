import { contact, site } from '../data/content.js'
import './Contact.css'

const SHARDS = [
  { top: '20%', left: '12%', size: 12, color: 'var(--cyan)', delay: '0s', clip: 'polygon(0 0, 100% 22%, 62% 100%)' },
  { top: '32%', left: '84%', size: 14, color: 'var(--blue-strong)', delay: '1.2s', clip: 'polygon(20% 0, 100% 40%, 0 100%)' },
  { top: '58%', left: '8%', size: 9, color: '#fff', delay: '2s', clip: 'polygon(0 30%, 100% 0, 70% 100%)' },
  { top: '68%', left: '90%', size: 10, color: 'var(--pink)', delay: '0.6s', clip: 'polygon(0 0, 100% 30%, 40% 100%)' },
  { top: '14%', left: '68%', size: 8, color: 'var(--green)', delay: '2.6s', clip: 'polygon(0 40%, 100% 0, 60% 100%)' },
]

export default function Contact() {
  return (
    <section className="contact" id="contact">
      {SHARDS.map((s, i) => (
        <span
          key={i}
          className="shard"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            background: s.color,
            clipPath: s.clip,
            animationDelay: s.delay,
          }}
        />
      ))}

      <div className="container contact__inner">
        <header className="contact__head" data-reveal>
          <span className="sec-head__index">/{contact.index}</span>
          <span className="sec-head__en">{contact.titleEn}</span>
        </header>

        <div className="contact__center">
          <h2 className="contact__headline" data-io>
            <span className="contact__hl-mask">
              <span className="contact__hl-line contact__hl-line--1">
                {contact.headline[0]}
              </span>
            </span>
            <span className="contact__hl-mask">
              <span className="contact__hl-line contact__hl-line--2">
                {contact.headline[1]}
              </span>
            </span>
          </h2>

          <p className="contact__sub" data-reveal data-delay="2">
            {contact.sub}
          </p>

          <a
            className="contact__mail"
            href={`mailto:${site.email}`}
            data-io
          >
            {contact.cta}
            <span className="contact__mail-arrow">↗</span>
          </a>

          <ul className="contact__rows" data-reveal data-delay="3">
            <li>
              <span className="mono-label">PHONE</span>
              <a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a>
            </li>
            <li>
              <span className="mono-label">WECHAT</span>
              <span>{site.wechat}</span>
            </li>
            <li>
              <span className="mono-label">BASE</span>
              <span>{site.location}</span>
            </li>
            <li>
              <span className="mono-label">STATUS</span>
              <span className="contact__status">
                <i className="contact__status-dot" />
                {site.status}
              </span>
            </li>
          </ul>
        </div>

        <footer className="contact__footer">
          <span className="mono-label">{contact.footer.copyright}</span>
          <span className="mono-label contact__built">{contact.footer.built}</span>
          <a href="#top" className="contact__top mono-label">
            {contact.footer.top} <span>↑</span>
          </a>
        </footer>
      </div>

      <div className="contact__glow" aria-hidden="true" />
      <div className="contact__beam" aria-hidden="true" />
      <div
        className="contact__ghost"
        aria-hidden="true"
        data-io
        data-plx="-0.09"
        data-plx-max="60"
        data-plx-base="translateX(-50%)"
      >
        <i>{site.nameEn}</i>
      </div>
    </section>
  )
}
