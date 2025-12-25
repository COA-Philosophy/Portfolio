---
title: "Building This Portfolio: A Development Log / 開発ログ"
date: "2025-12-25"
description: "Behind the scenes of building this 'Code Art & Zen' portfolio. / 「Code Art & Zen」ポートフォリオ開発の舞台裏。エラーとの格闘からジェネラティブアートの実装まで。"
tags: ["Next.js", "Tailwind CSS", "Generative Art", "DevLog"]
---

# 2025-12-25 (Wednesday) - Portfolio Development Log
# 2025-12-25 (水) - ポートフォリオ開発ログ

**Topic:** Building the "Code Art & Zen" Portfolio with Next.js + Tailwind v4  
**トピック:** Next.js + Tailwind v4 による「Code Art & Zen」ポートフォリオの構築

## Summary / 概要
I built this portfolio site from scratch, fusing "Minimal Zen" with "Playful Code Art". This post documents the journey of implementing a Markdown-based blog system, integrating generative Canvas animations, and the challenges faced along the way to Vercel deployment.

「ミニマルな禅」と「遊び心あるコードアート」を融合させたポートフォリオサイトをゼロから構築しました。本記事では、Markdownベースのブログ機能の実装、Canvasを用いたジェネラティブアニメーションの統合、そしてVercelへのデプロイに至るまでに直面した課題と解決策を記録します。

---

## Detailed Process / 詳細プロセス

### 1. 🏗️ Environment & Component Strategy (Shadcn UI)
### 1. 🏗️ 環境構築とコンポーネント戦略

- **Decision:** Adopted `shadcn/ui` and `Tailwind CSS v4` as the design system.
- **決定:** デザインシステムとして `shadcn/ui` と `Tailwind CSS v4` を採用。

- **Trial & Error (CLI Freeze):**
    - **Phenomenon:** Commands like `npx shadcn@latest add input` kept freezing while waiting for user input.
    - **Solution:** Switched to a "Manual Operation" approach, creating source files (`badge.tsx`, `input.tsx`, etc.) directly. This confirmed a robust workflow independent of CLI tools.
- **試行錯誤 (CLIのフリーズ):**
    - **現象:** `npx shadcn@latest add input` 等のコマンドが、ユーザー入力待ちの状態でフリーズする現象が頻発。
    - **解決策:** コマンドラインツールに依存せず、必要なコンポーネントのソースコードを直接作成・配置する「手動運用」に切り替えて解決。これにより、環境に依存しない堅牢な構築フローを確認しました。

### 2. 🎨 Visualizing "Code Art"
### 2. 🎨 "Code Art" の具現化

- **Challenge:** How to visualize the concept of "Code Art"?
- **課題:** 「コードアート」というコンセプトをどう視覚化するか？

- **Evolution:**
    - **Ver 1 (Framer Motion):** Initially just floating code snippets. It was too subtle and invisible.
    - **Ver 2 (Opening Integration):** Integrated the "Slow Convergence (Deep Glow)" Canvas animation as an opening sequence. Used `AnimatePresence` for smooth transitions.
    - **Ver 3 (Generative Hero):** Massively updated the Hero section's `CodeBackground.tsx`. Combined a mouse-reactive particle network with syntax-highlighted code snippets to achieve both visibility and immersion.
- **進化の過程:**
    - **Ver 1 (Framer Motion):** 当初は単にコード片が浮遊するだけの実装。背景に溶け込みすぎて見えにくいという課題があった。
    - **Ver 2 (Opening Integration):** ユーザー提供の「Slow Convergence」Canvasアニメーションを解析し、オープニングとして統合。`AnimatePresence` でメインコンテンツへのスムーズな遷移を実現。
    - **Ver 3 (Generative Hero):** Heroセクションの `CodeBackground.tsx` を大幅刷新。マウスに反応するパーティクルネットワークと、色付きのコード片（Syntax Highlighting）を組み合わせ、視認性と没入感を両立させた。

### 3. 📝 Implementing the Blog (Markdown vs CMS)
### 3. 📝 ブログ機能の実装

- **Strategy:** Selected **Markdown (File-based)** for zero operational cost.
- **方針:** 運用コストゼロの **Markdown (ファイル管理)** 方式を採用。

- **Implementation:**
    - Built metadata parsing logic using `gray-matter`.
    - Separated `app/page.tsx` into a Server Component (for SEO/Data) and a Client Component (`ClientHome` for Animations).
    - Implemented dynamic routing: `app/posts/[slug]/page.tsx`.
- **実装:**
    - `gray-matter` によるメタデータ解析ロジックを構築。
    - `app/page.tsx` をサーバーコンポーネント化し、クライアントコンポーネントと分離することで、SEOとアニメーションを共存させた。
    - 動的ルーティング `app/posts/[slug]/page.tsx` の実装。

### 4. 🐛 Battling Build Errors (@tailwindcss/typography)
### 4. 🐛 ビルドエラーとの格闘

- **Phenomenon:** After installing `@tailwindcss/typography` for blog styling, the build failed with `CssSyntaxError`.
- **現象:** ブログ記事のスタイル適用のため `@tailwindcss/typography` を導入後、ビルドエラーが発生。

- **Solution (Deep Dive):**
    - Abandoned the plugin dependency.
    - **Manually defined styles** in `app/globals.css`. Added a custom `.prose` class to define styles for `h1`~`h3`, `code`, etc., perfectly matching the "Zen" theme.
- **解決策:**
    - プラグイン依存を断念し、**手動でのスタイル定義** に方針転換。
    - `app/globals.css` 内に `.prose` クラスを独自定義。`h1`~`h3`、`code` などのスタイルを「Zen」テーマに合わせて直接記述することで解決。

### 5. 🚀 Deployment & SEO
### 5. 🚀 デプロイとSEO

- **Implementation:** Using Next.js Metadata API for SEO, Open Graph, and Sitemap/Robots.
- **Result:** Successfully deployed to Vercel via GitHub. Verified 60fps animation performance on production.
- **結果:** GitHub経由でVercelへデプロイ。実機でのアニメーションパフォーマンスも良好であることを確認。

---

## Learnings & Next Actions / 学びとネクストアクション

- **Tailwind v4 Plugins:** The ecosystem is still catching up. Having manual CSS fallback skills is crucial (`@layer utilities`).
- **Canvas x React:** Rigorous management of `useEffect` and `requestAnimationFrame` cleanup allows heavy generative art to coexist peacefully with React's lifecycle.

- **Tailwind v4:** まだエコシステムが追いついていない部分があるため、手動CSS (`@layer utilities`) のスキルが重要。
- **Canvas x React:** `useEffect` 内でのクリーンアップを徹底することで、重厚なジェネラティブアートもReactライフサイクル内で安全に動作させられる。
