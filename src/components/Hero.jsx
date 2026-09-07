import { useEffect, useState } from 'react'
import { hero, site } from '../data/content.js'
import './Hero.css'

/* 碎片粒子：位置 / 尺寸 / 颜色 / 浮动延迟 */
const SHARDS = [
  { top: '18%', left: '58%', size: 14, color: 'var(--cyan)', delay: '0s', clip: 'polygon(0 0, 100% 22%, 62% 100%)' },
  { top: '26%', left: '78%', size: 10, color: '#fff', delay: '0.8s', clip: 'polygon(0 30%, 100% 0, 70% 100%)' },
  { top: '14%', left: '86%', size: 18, color: 'var(--blue-strong)', delay: '1.6s', clip: 'polygon(20% 0, 100% 40%, 0 100%)' },
  { top: '44%', left: '90%', size: 12, color: 'var(--pink)', delay: '0.4s', clip: 'polygon(0 0, 100% 30%, 40% 100%)' },
  { top: '58%', left: '72%', size: 9, color: 'var(--cyan)', delay: '2.2s', clip: 'polygon(0 40%, 100% 0, 60% 100%)' },
  { top: '36%', left: '64%', size: 8, color: 'var(--green)', delay: '1.2s', clip: 'polygon(0 0, 100% 50%, 30% 100%)' },
  { top: '66%', left: '86%', size: 15, color: '#fff', delay: '2.8s', clip: 'polygon(30% 0, 100% 20%, 0 100%)' },
]

/* 开场幕布：展示 logo 后整体上移退场，2.4s 后从 DOM 移除 */
function Curtain() {
  const [gone, setGone] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setGone(true), 2400)
    return () => clearTimeout(t)
  }, [])
  if (gone) return null
  return (
    <div className="curtain" aria-hidden="true">
      <div className="curtain__beam" />
      <div className="curtain__mark">
        XFF<span>®</span>
      </div>
      <div className="curtain__tag">PORTFOLIO — 2026</div>
    </div>
  )
}

export default function Hero() {
  const mediaUrl = (file) => `${import.meta.env.BASE_URL}media/${file}`

  return (
    <section className="hero">
      <Curtain />

      {/* 视频背景（带视差）：替换 public/media/hero.mp4 即可 */}
      <div className="hero__bg">
        <video
          className="hero__video"
          poster={mediaUrl('hero-poster.jpg')}
          data-plx="0.16"
          data-plx-max="64"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src={mediaUrl('hero.webm')} type="video/webm" />
          <source src={mediaUrl('hero.mp4')} type="video/mp4" />
        </video>
        <div className="hero__shade" />
        {/* 斜切光带：外层视差，内层扫入动画 */}
        <div className="hero__beam-wrap hero__beam-wrap--white" data-plx="0.22" data-plx-max="70">
          <div className="hero__beam hero__beam--white" />
        </div>
        <div className="hero__beam-wrap hero__beam-wrap--cyan" data-plx="0.3" data-plx-max="80">
          <div className="hero__beam hero__beam--cyan" />
        </div>
      </div>

      {/* 碎片粒子 */}
      {SHARDS.map((s, i) => (
        <span
          key={i}
          className="shard hero__shard"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            background: s.color,
            clipPath: s.clip,
            '--fd': s.delay,
          }}
        />
      ))}

      <div className="container hero__inner">
        <div className="hero__eyebrow">
          <span className="hero__chip o-chip">
            <i className="hero__dot" />
            {hero.eyebrow}
          </span>
          <span className="mono-label hero__eyebrow-name o-name">
            {site.nameEn} — {site.location}
          </span>
        </div>

        <h1 className="hero__title">
          <span className="hero__mask">
            <span className="hero__line o-line1">{hero.titleA}</span>
          </span>
          <span className="hero__mask">
            <span className="hero__line o-line2">
              {hero.titleB[0]}
              <em className="hero__title-accent o-accent">{hero.titleB[1]}</em>
              {hero.titleB[2]}
            </span>
          </span>
        </h1>

        <div className="hero__foot">
          <p className="hero__intro o-foot" style={{ '--od': '2.05s' }}>
            {hero.intro}
          </p>

          <ul className="hero__roles o-foot" style={{ '--od': '2.2s' }}>
            {site.roles.map((r, i) => (
              <li key={r}>
                <span className="hero__role-index">0{i + 1}</span>
                {r}
              </li>
            ))}
          </ul>

          <a href="#about" className="hero__scroll o-foot" style={{ '--od': '2.35s' }}>
            <span className="hero__scroll-line" />
            {hero.scrollHint}
          </a>
        </div>
      </div>
    </section>
  )
}
