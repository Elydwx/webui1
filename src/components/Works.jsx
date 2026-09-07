import { works } from '../data/content.js'
import './Works.css'

export default function Works() {
  return (
    <section className="section works" id="works">
      <div className="container">
        <header className="sec-head" data-io>
          <span className="sec-head__ghost" data-plx="-0.07" data-plx-max="46">
            <i>WORKS</i>
          </span>
          <div className="sec-head__left">
            <span className="sec-head__index">/{works.index}</span>
            <h2 className="sec-head__title">
              <span className="sec-head__title-inner">{works.titleCn}</span>
            </h2>
          </div>
          <span className="sec-head__en">{works.titleEn}</span>
        </header>

        <div className="works__grid">
          {works.items.map((w, i) => (
            <article
              className={`work work--${w.size}`}
              key={w.no}
              data-io
              style={{ '--d': `${(i % 2) * 0.14}s` }}
            >
              <a className="work__media" href="#contact" aria-label={w.title}>
                <span className="work__plx" data-plx="0.12" data-plx-max="30">
                  <span className="work__zoom">
                    <img src={w.img} alt={w.title} loading="lazy" />
                  </span>
                </span>
                <span className="reveal-cover" />
                <span className="work__no">{w.no}</span>
                <span className="work__view">
                  查看项目 <i>↗</i>
                </span>
              </a>

              <div className="work__meta">
                <div className="work__head">
                  <h3 className="work__title">{w.title}</h3>
                  <span className="work__year">{w.year}</span>
                </div>
                <div className="work__sub">
                  <span className="mono-label">{w.en}</span>
                  <ul className="work__tags">
                    {w.tags.map((t) => (
                      <li className="tag" key={t}>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="works__note mono-label" data-reveal>
          {works.note}
        </p>
      </div>
    </section>
  )
}
