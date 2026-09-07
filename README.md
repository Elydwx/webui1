# 谢丰帆 · 个人作品集网站

暗色系个人作品集，React + Vite 构建。版心 1700px，面向 PC 端展示。

## 快速开始

```bash
npm install    # 首次运行，安装依赖
npm run dev    # 启动开发服务器，浏览器自动打开 http://localhost:5173
npm run build  # 打包生产版本到 dist/
```

需要 Node.js 18 及以上版本。

## 改内容：只动一个文件

所有文案集中在 `src/data/content.js`：姓名、联系方式、自我介绍、项目卡片、优势卡片、数据统计……改这一个文件即可，不用碰组件代码。

标有 `[占位]` 的内容（微信号、项目数据、项目案例）是根据简历合理编写的占位信息，记得替换成真实内容。

## 换素材：public/media/

| 文件 | 用途 | 建议 |
| --- | --- | --- |
| `hero.mp4` | 首页视频背景 | 换成你自己的视频，1080p、10–30 秒循环、尽量偏暗 |
| `hero-poster.jpg` | 视频加载前的封面帧 | 与视频首帧一致 |
| `portrait.jpg` | 个人经历模块人物图 | 4:5 竖版，600px 宽以上 |
| `p1.jpg` – `p4.jpg` | 项目卡片封面 | 横版，1600px 宽以上 |

当前所有图片与视频均为程序生成的占位素材，直接替换同名文件即可生效。

## 目录结构

```
src/
  data/content.js      ← 全部文案（先改这里）
  components/          ← 六个页面模块：Nav / Hero / Marquee / About / Works / Edge / Contact
  styles/global.css    ← 设计令牌（颜色、字体、版心宽度）与通用样式
  hooks/useReveal.js   ← 滚动入场动画
```

想调主题色：改 `global.css` 里 `:root` 的色板（当前为 P3R 电光蓝体系）。
想调版心：改 `--container`（当前 1700px）。

## 动效体系

无第三方依赖（等效 GSAP + ScrollTrigger 的用法），引擎在 `src/hooks/useReveal.js`：

- 开场编排：幕布揭开 → 光带扫入 → 标题遮罩压缩归位 → AI 色块擦除 → 信息条 stagger，时间轴写在 `Hero.css` 的 `o-*` 类里
- 滚动进场：给容器加 `data-io`，进入视口时得到 `.in`，各组件 CSS 定义编排；`data-reveal` 是通用上浮
- 视差：`data-plx="速度"`（负值反向）、`data-plx-max` 位移上限、`data-plx-base` 保留基础 transform
- 缓动令牌在 `motion.css`：`--e-out`（丝滑收尾）/ `--e-inout`（遮罩擦除）
- 自动响应 `prefers-reduced-motion`，降级为直接显示

后续如想换成 GSAP：`npm i gsap` 后重写 `useReveal.js` 即可，组件里的 data 属性不用动。
