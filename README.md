# Frontend Mentor - ブックマーク ランディングページ（実装済コード）

これは [Frontend Mentor の Bookmark landing page チャレンジ](https://www.frontendmentor.io/challenges/bookmark-landing-page-5d0b588a9edda32581d29158) に対する解決策（実装コード）です。実務レベルのデザインカンプをもとに、WAI-ARIAに準拠したアクセシビリティ設計、`vw` 単位を駆使した流体レスポンシブ、そして Vanilla JS による高度なDOMアニメーション制御を融合させ、妥協のないモダンなUI/UXを実装しました。

## 目次

- [概要](#概要)
  - [要件・機能](#要件機能)
  - [スクリーンショット](#スクリーンショット)
  - [リンク](#リンク)
- [開発プロセス](#開発プロセス)
  - [ディレクトリ構造](#ディレクトリ構造)
  - [使用技術・環境](#使用技術環境)
  - [こだわった技術的アプローチ](#こだわった技術的アプローチ)
    - [1. 流体レスポンシブ・スタイル設計（SCSS）](#1-流体レスポンシブスタイル設計scss)
    - [2. WAI-ARIAに準拠したセマンティック・インタラクション（JS）](#2-wai-ariaに準拠したセマンティックインタラクションjs)
    - [3. アニメーションライフサイクルと描画最適化（JS × SCSS）](#3-アニメーションライフサイクルと描画最適化js--scss)
  - [今後の拡張計画](#今後の拡張計画)
- [制作者](#制作者)

## 概要

### 要件・機能

ユーザーは以下の操作・表示確認が可能です：

- **フルレスポンシブ・流体レイアウト:** スマートフォン、タブレット、PC（1440px〜）それぞれの閲覧環境において、画面幅に応じて滑らかに縮尺が可変（Fluid）するレイアウト。
- **アクセシブルかつ高度なインタラクティブUI（Vanilla JS）:**
  - **ハンバーガーメニュー:** モバイル環境におけるナビゲーションの開閉。開閉状態に応じた `aria-expanded` の制御、および画像アセット（`src` / `alt` 属性）の動的切り替え。下層リンククリック時の自動クローズ処理を完備。
  - **タブメニュー（Features）:** `role="tab"` / `role="tabpanel"` の関係性を保持し、`aria-selected` と `hidden` 属性を用いてアクセシブルにコンテンツを切り替え。
  - **アコーディオン（FAQ）:** `scrollHeight` を用いた動的な高さ計算と、非表示処理（`hidden`）のライフサイクルを考慮した、一切のカクつきがないスムーズな開閉アニメーション。
  - **高パフォーマンスなフェードイン:** `Intersection Observer API`（交差監視API）を利用した、スクロール連動型の演出。

### スクリーンショット

![](./preview.jpg)

### リンク

- ライブサイト（公開ページ）: [https://yama5504.github.io/bookmark-landing-page-master/](https://yama5504.github.io/bookmark-landing-page-master/)

---

## 開発プロセス
### ディレクトリ構造

Viteの静的アセット管理およびSassのコンパイラ環境に準拠し、関心の分離（Separation of Concerns）を意識したクリーンなディレクトリ設計を行っています。なお、ローカル環境の膨大な依存ライブラリ（`node_modules/`）は `.gitignore` を用いて厳密にGit管理対象から除外しています。

```text
.
├── .gitignore               # Git管理除外設定（node_modules等の除外）
├── README.md                # 本ドキュメント
├── index.html               # メインHTML（エントリーポイントからJSを呼び出し）
├── package.json             # プロジェクト依存関係・各種スクリプト定義
├── package-lock.json        # 依存ライブラリのバージョンロック
├── preview.jpg              # README表示用のプレビュー画像
├── vite.config.js           # Vite設定ファイル
├── design/                  # 支給されたデザインカンプ・仕様イメージ（Git管理）
│   └── *.jpg                # 各画面・状態のレイアウト画像
├── public/                  # 成果物にそのままコピーされる静的アセット
│   └── images/              # ロゴ、アイコン、背景用SVG等
└── src/                     # ソースコードを集約する開発用ディレクトリ
    ├── main.js              # 全体統合用のメインJS
    ├── css/
    │   └── style.scss       # 各種状態定義・コンポーネントを包括するSCSS
    └── js/
        └── script.js        # DOM操作・アクセシビリティ属性・UIアニメーションを制御するVanilla JS
```

### 使用技術・環境
- 言語・マークアップ: HTML5（WAI-ARIA準拠） / SCSS (Sass) / Vanilla JS (ES6+)
- リセットCSS: destyle.css (npm管理・SCSS側でのインポート)
- ビルドツール: Vite
- 環境自動化: GitHub ActionsによるGitHub Pagesへの自動CI/CDパイプライン構築

### こだわった技術的アプローチ
1. 流体レスポンシブ・スタイル設計（SCSS）
メディアクエリによるブレイクポイント（768px / 1440px）での唐突なレイアウト崩れを防ぐため、font-size や padding、ボタンの横幅にいたるまで vw（Viewport Width）単位をベースに算出した設計を採用。あらゆる画面幅において、デザインカンプの黄金比を維持したまま、流体のように滑らかに変化するモダンなレスポンシブレイアウトを実現しました。

2. WAI-ARIAに準拠したセマンティック・インタラクション（JS）
単に見栄え（CSS）を切り替えるだけでなく、スクリーンリーダーやキーボード操作を行うユーザーにもWebアプリケーションの正確な状態が伝わるよう、JavaScriptによる支援技術（A11y）のコントロールを徹底しました。

- ハンバーガーメニュー開閉時の aria-expanded の論理値（true/false）の動的同期。
- タブ切り替え時における aria-selected と hidden 属性の一貫した制御。
- JS側でDOMスタイルを直接変更するのではなく、「JSは状態（WAI-ARIA属性やクラス）の切り替えのみに徹し、スタイリングの変化はSCSS側が一元管理する」 設計を徹底しています。

3. アニメーションライフサイクルと描画最適化（JS × SCSS）
ブラウザのレンダリング負荷（レイアウトシフトやメインスレッドの占有）を極限まで抑えるため、以下の高度なロジックを実装しています。

- アコーディオンの流暢な開閉制御:
展開時は、一瞬 hidden = false を外して要素の正確な scrollHeight（内包するコンテンツの高さ）を算出し、requestAnimationFrame を用いて次の描画フレームで max-height を更新することで、CSSトランジションを確実に発火させています。
さらに、transitionend イベントを監視してアニメーション完了後に不要となったインラインスタイルを removeProperty で即座に破棄。重複発火やメモリリークを防ぐために、リスナー自身をその場で解除（removeEventListener）するカプセル化を行っています。

- Intersection Observer API によるスクロール演出最適化:
スクロール連動のフェードイン演出（.fade-in）には、従来の window.addEventListener('scroll') による過剰な発火を避け、ブラウザに最適化された交差監視APIを採用。要素が画面内（交差閾値 10%）に入った瞬間に .is-active クラスを付与し、さらに即座に observer.unobserve(entry.target) を実行して監視を終了させることで、無駄なイベント発火を一切排除し、ページの描画パフォーマンスを最大化しました。

### 今後の拡張計画
JavaScriptのコンポーネント・モジュール化（ES Modules）: 現状は script.js 内にすべてのUIロジックが集約されているため、今後の大規模開発やメンテナンス性の向上を見据え、「Navigation.js」「Tab.js」「Accordion.js」「ScrollAnimate.js」のように機能ごとにクラス/モジュール分割を行い、main.js でインポート・一元管理する設計へのリファクタリングを計画しています。

## 制作者
GitHub - @yama5504