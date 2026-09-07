import { useEffect, useRef, useState } from 'react'
import { about, stats } from '../data/content.js'
import './About.css'

/* 数字滚动组件 */
function Counter({ value, suffix }) {
  const ref = useRef(null)
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        const start = performance.now()
        const dur = 2000
        const tick = (now) => {
          const p = Math.min((now - start) / dur, 1)
          const eased = 1 - Math.pow(1 - p, 3)
          setDisplay(Math.round(eased * value))
          if (p < 1) raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
      },
      { threshold: 0.5 },
    )
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [value])

  return (
    <span ref={ref} className="stat__value">
      {display}
      <span className="stat__suffix">{suffix}</span>
    </span>
  )
}

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <header className="sec-head" data-io>
          <span className="sec-head__ghost" data-plx="-0.07" data-plx-max="46">
            <i>ABOUT</i>
          </span>
          <div className="sec-head__left">
            <span className="sec-head__index">/{about.index}</span>
            <h2 className="sec-head__title">
              <span className="sec-head__title-inner">{about.titleCn}</span>
            </h2>
          </div>
          <span className="sec-head__en">{about.titleEn}</span>
        </header>

        <div className="about__grid">
          {/* 左：人物图（遮罩揭示 + 轻视差） */}
          <figure className="about__portrait" data-io>
            <div className="about__portrait-frame">
              <span className="about__portrait-plx" data-plx="0.09" data-plx-max="22">
                <img src="/media/portrait.jpg" alt="谢丰帆" loading="lazy" />
              </span>
              <span className="reveal-cover" />
            </div>
            <figcaption className="mono-label">{about.portraitCaption}</figcaption>
            <span className="about__portrait-corner about__portrait-corner--tl" />
            <span className="about__portrait-corner about__portrait-corner--br" />
          </figure>

          {/* 右：介绍与联系方式 */}
          <div className="about__body">
            <p className="about__lead" data-reveal>
              {about.lead}
            </p>

            <div className="about__paras">
              {about.paragraphs.map((p, i) => (
                <p key={i} data-reveal data-delay={String(Math.min(i + 1, 3))}>
                  {p}
                </p>
              ))}
            </div>

            <div className="about__meta" data-reveal>
              <ul className="about__contacts">
                {about.contacts.map((c) => (
                  <li key={c.label}>
                    <span className="mono-label">{c.label}</span>
                    {c.href ? (
                      <a className="about__contact-value" href={c.href}>
                        {c.value}
                      </a>
                    ) : (
                      <span className="about__contact-value">{c.value}</span>
                    )}
                  </li>
                ))}
              </ul>

              <div className="about__edu">
                <span className="mono-label">EDUCATION</span>
                <p className="about__edu-school">{about.education.school}</p>
                <p className="about__edu-detail">
                  {about.education.degree} · {about.education.span}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 数据条 */}
        <ul className="about__stats" data-reveal>
          {stats.map((s, i) => (
            <li className="stat" key={s.label} data-reveal data-delay={String(i + 1)}>
              <Counter value={s.value} suffix={s.suffix} />
              <div className="stat__labels">
                <span className="stat__cn">{s.label}</span>
                <span className="mono-label">{s.en}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
