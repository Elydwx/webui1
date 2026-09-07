/* ============================================================
 * 站点内容配置 —— 所有文案集中在这里，改这一个文件即可换内容
 * 说明：带 [占位] 的内容是根据简历合理虚构的，请替换为真实信息
 * ============================================================ */

const media = (file) => `${import.meta.env.BASE_URL}media/${file}`

export const site = {
  nameCn: '谢丰帆',
  nameEn: 'XIE FENGFAN',
  monogram: 'XFF®',
  roles: ['视觉设计师', 'AI 设计师', '品牌设计师'],
  email: '832670@163.com',
  phone: '193 0803 7906',
  wechat: 'XFF-Design', // [占位] 改成你的微信号
  location: '中国 · 四川',
  status: '开放实习与项目合作',
  year: '2026',
}

export const nav = [
  { label: '首页', en: 'INDEX', href: '#top' },
  { label: '关于', en: 'ABOUT', href: '#about' },
  { label: '项目', en: 'WORKS', href: '#works' },
  { label: '优势', en: 'EDGE', href: '#edge' },
]

export const hero = {
  eyebrow: 'PORTFOLIO — 2026 EDITION',
  titleA: '以视觉为语言',
  titleB: ['与 ', 'AI', ' 共同设计'],
  intro:
    '你好，我是谢丰帆 —— 一名会写代码、善用 AI 的视觉设计师，专注品牌视觉与数字体验。',
  scrollHint: 'SCROLL',
}

export const marquee = [
  'VISUAL DESIGN',
  '品牌视觉',
  'AI WORKFLOW',
  '数字体验',
  'BRAND IDENTITY',
  'AIGC 探索',
  'DESIGN ENGINEERING',
  '视觉叙事',
]

export const about = {
  index: '01',
  titleCn: '关于我',
  titleEn: 'ABOUT ME',
  lead: '设计是理性与感性的接口，我恰好站在两边的交界处。',
  paragraphs: [
    '我是谢丰帆，2004 年生于四川，现就读于西华师范大学（2023 – 2027）。从品牌视觉出发，我持续探索 AI 时代的设计工作流：让 AIGC 成为可控的生产力，而不只是随机的惊喜。',
    '与多数设计师不同，我有扎实的工程背景 —— 熟悉 Python、C++ 与前端技术。这让我能把想法做成真正可交互的作品，也让我在 Midjourney、Stable Diffusion、ComfyUI 这样的工具链中走得更深、更稳。',
    '曾获蓝桥杯省赛二等奖、大学生信息素养大赛省赛三等奖；担任过学习委员与学院社团干事 —— 我习惯把沟通与协作当作设计流程的一部分。',
  ],
  contacts: [
    { label: 'EMAIL', value: '832670@163.com', href: 'mailto:832670@163.com' },
    { label: 'PHONE', value: '193 0803 7906', href: 'tel:19308037906' },
    { label: 'BASE', value: '中国 · 四川', href: null },
    { label: 'WECHAT', value: 'XFF-Design', href: null }, // [占位]
  ],
  education: {
    school: '西华师范大学',
    degree: '本科 · 在读',
    span: '2023 — 2027',
  },
  portraitCaption: 'PORTRAIT · 谢丰帆',
}

/* 数字均为 [占位]，改成你的真实数据 */
export const stats = [
  { value: 20, suffix: '+', label: '项目实践', en: 'PROJECTS' },
  { value: 3, suffix: '', label: '设计方向', en: 'DISCIPLINES' },
  { value: 2, suffix: '', label: '省级奖项', en: 'AWARDS' },
  { value: 10, suffix: '+', label: 'AI 工具栈', en: 'AI TOOLKIT' },
]

export const works = {
  index: '02',
  titleCn: '精选项目',
  titleEn: 'SELECTED WORKS',
  note: '以下为占位项目卡片 · 图片与信息均可在 content.js 中替换',
  items: [
    {
      no: '01',
      title: 'NEBULA 品牌视觉重塑',
      en: 'BRAND IDENTITY SYSTEM',
      tags: ['品牌', 'VI 系统', '视觉规范'],
      year: '2026',
      img: media('p1.jpg'),
      size: 'lg',
    },
    {
      no: '02',
      title: 'AIGC 视觉实验 · 形态生成',
      en: 'AI VISUAL EXPLORATION',
      tags: ['AIGC', 'ComfyUI', '视觉实验'],
      year: '2025',
      img: media('p2.jpg'),
      size: 'sm',
    },
    {
      no: '03',
      title: 'MONO 电商视觉企划',
      en: 'E-COMMERCE CAMPAIGN',
      tags: ['电商', 'KV 主视觉', '运营视觉'],
      year: '2025',
      img: media('p3.jpg'),
      size: 'sm',
    },
    {
      no: '04',
      title: 'OS-LIKE 界面视觉概念',
      en: 'UI VISUAL CONCEPT',
      tags: ['UI', '动效', '概念设计'],
      year: '2024',
      img: media('p4.jpg'),
      size: 'lg',
    },
  ],
}

export const edge = {
  index: '03',
  titleCn: '个人优势',
  titleEn: 'WHAT I BRING',
  items: [
    {
      no: '01',
      icon: 'brand',
      titleCn: '品牌视觉',
      titleEn: 'BRAND IDENTITY',
      desc: '从策略到落地的完整品牌视觉能力：标志、VI 系统、视觉规范与应用延展，让品牌在每个触点保持一致的气质。',
    },
    {
      no: '02',
      icon: 'ai',
      titleCn: 'AI 设计工作流',
      titleEn: 'AI WORKFLOW',
      desc: '深度使用 Midjourney / Stable Diffusion / ComfyUI，把 AIGC 从「随机抽卡」变成可控、可复现的生产管线。',
    },
    {
      no: '03',
      icon: 'code',
      titleCn: '设计 × 代码',
      titleEn: 'DESIGN ENGINEERING',
      desc: '软件工程科班出身，熟悉 Python / C++ / 前端。能自己把设计做成可交互原型，和开发团队无摩擦对话。',
    },
    {
      no: '04',
      icon: 'collab',
      titleCn: '沟通协作',
      titleEn: 'COLLABORATION',
      desc: '学习委员与社团干事经历，善于倾听与表达，抗压能力强 —— 把沟通当作设计流程的一部分，而非成本。',
    },
  ],
}

export const contact = {
  index: '04',
  titleCn: '联系',
  titleEn: 'CONTACT',
  headline: ['有想法？', '来聊一个新项目。'],
  sub: '实习 / 品牌合作 / AI 视觉项目 —— 随时来信，24 小时内回复。',
  cta: '832670@163.com',
  footer: {
    copyright: '© 2026 谢丰帆 · XIE FENGFAN',
    built: 'DESIGNED & CODED BY MYSELF',
    top: '回到顶部',
  },
}
