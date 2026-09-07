import { useEffect } from 'react'

/**
 * 动效引擎（无依赖，等效 GSAP + ScrollTrigger 的用法）
 *
 * - [data-io]      滚动进场编排容器：进入视口时加 .in，具体动画在各组件 CSS 里定义
 * - [data-reveal]  通用上浮进场，可配 [data-delay="1..5"] 阶梯延迟
 * - [data-plx]     视差元素：值为速度系数（正值随滚动下沉、负值上浮）
 *                  [data-plx-max]  位移上限 px（默认 40）
 *                  [data-plx-base] 需要保留的基础 transform（如 rotate/skew）
 *
 * 视差采用 rAF + lerp 阻尼，只写 transform，不做逐帧布局读取。
 * prefers-reduced-motion 时全部降级为直接显示。
 */
export function useMotion() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      document.documentElement.classList.add('no-motion')
      document
        .querySelectorAll('[data-io], [data-reveal]')
        .forEach((el) => el.classList.add('in'))
      return
    }

    /* ---------- 滚动进场 ---------- */
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.16, rootMargin: '0px 0px -6% 0px' },
    )
    document
      .querySelectorAll('[data-io], [data-reveal]')
      .forEach((el) => io.observe(el))

    /* ---------- 视差 ---------- */
    const items = [...document.querySelectorAll('[data-plx]')].map((el) => ({
      el,
      speed: parseFloat(el.dataset.plx) || 0.1,
      max: parseFloat(el.dataset.plxMax || '40'),
      base: el.dataset.plxBase || '',
      top: 0,
      height: 0,
      cur: 0,
    }))

    const measure = () => {
      const sy = window.scrollY
      items.forEach((it) => {
        const r = it.el.getBoundingClientRect()
        it.top = r.top + sy - it.cur // 扣除当前视差位移
        it.height = r.height
      })
    }

    let vh = window.innerHeight
    const onResize = () => {
      vh = window.innerHeight
      measure()
    }

    measure()
    window.addEventListener('resize', onResize)
    window.addEventListener('load', measure)
    const remeasure = setTimeout(measure, 700)

    let raf
    const tick = () => {
      const sy = window.scrollY
      for (const it of items) {
        // 元素中心相对视口中心的距离
        const center = it.top + it.height / 2 - sy - vh / 2
        const target = Math.max(-it.max, Math.min(it.max, center * it.speed))
        it.cur += (target - it.cur) * 0.085 // lerp 阻尼，丝滑跟随
        const v = Math.abs(it.cur) < 0.05 ? 0 : it.cur
        it.el.style.transform = `translate3d(0, ${v.toFixed(2)}px, 0) ${it.base}`
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
      clearTimeout(remeasure)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('load', measure)
    }
  }, [])
}

export { useMotion as useReveal }
