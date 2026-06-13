# Frontend Mentor - ブックマーク ランディングページ（実装済コード）
これは Frontend Mentor の Bookmark landing page チャレンジ に対する私の解決策（実装コード）です。実務に近いデザインカンプをもとに、レスポンシブWebデザインとインタラクティブな機能を実装しました。

![Design preview for the Bookmark landing page coding challenge](preview.jpg)

## 目次


## 概要
### 要件・機能

スクリーンショット

### リンク

## 開発プロセス
### 使用技術・環境
### こだわった点・学んだこと

### 今後の課題

### 参考にしたリソース

## 制作者
概要
要件・機能
ユーザーは以下の操作・表示確認が可能です：

デバイスの画面サイズ（PC、タブレット、スマホ）に最適化されたレスポンシブレイアウトの閲覧

すべてのインタラクティブな要素（ボタン、リンク、タブ、アコーディオンなど）のホバー・アクティブ状態の確認

メルマガ登録フォーム送信時のバリデーション（エラーメッセージ表示）：

入力欄が空の状態で送信された場合

メールアドレスの形式（@ やドメイン）が正しくない場合

スクリーンショット
※ここに完成したページのスクリーンショット画像を配置すると、ポートフォリオとしての見栄えがグッと良くなります！

リンク
ソリューション（Frontend Mentor提出ページ）: [ここにFrontend Mentorの公開URLを貼る]

ライブサイト（公開ページ）: [ここにGitHub PagesのURLを貼る]

開発プロセス
使用技術・環境
言語・マークアップ: セマンティック HTML5 / SCSS (Sass) / Vanilla JS (ES6+)

ビルドツール: Vite

設計手法: モバイルファースト・ワークフロー

バージョン管理・デプロイ: Git / GitHub / GitHub Pages (GitHub Actionsによる自動デプロイ)

こだわった点・学んだこと
今回のプロジェクトでは、フレームワークを使わずにVanilla JSとSCSSを用いて、保守性の高いコードを書くことに注力しました。

特に意識した実装コードの例です：

HTML


<!-- セマンティックなマークアップを意識したニュースレター部分 -->
<section class="newsletter">
  <form id="form" novalidate>
    <div class="input-group">
      <input type="email" id="email" placeholder="Enter your email address" required>
      <span class="error-message" aria-live="polite"></span>
    </div>
    <button type="submit">Contact Us</button>
  </form>
</section>
SCSS


// SCSSの変数やネスト、Mixinsを活用したレスポンシブ対応
.hero {
  display: flex;
  flex-direction: column;

  @include mq(desktop) {
    flex-direction: row;
    align-items: center;
  }
}
JavaScript


// JavaScriptによるフォームのリアルタイムバリデーション
const form = document.getElementById('form');
const emailInput = document.getElementById('email');

form.addEventListener('submit', (e) => {
  if (!emailInput.validity.valid) {
    e.preventDefault();
    // ここにエラーメッセージを表示するカスタム処理を記述
  }
});
学んだこと：

ブラウザ標準のバリデーションを novalidate であえて無効化し、CSSとJavaScriptでデザインカンプ通りの美しいエラーUIを表現する方法を学びました。

Viteを使ったローカル環境の構築から、GitHub Actionsを連携させたGitHub Pagesへの自動CI/CDパイプライン（main ブランチへのプッシュで自動ビルド＆デプロイ）の流れを実務レベルで構築できるようになりました。

今後の課題
アクセシビリティの向上: タブメニューやアコーディオン（FAQ）部分に対して、キーボード操作やスクリーンリーダーに配慮した aria-* 属性の付与をより徹底したいです。

CSSのコンポーネント化: 今回はSCSSで実装しましたが、規模が大きくなった際を見据えて、BEMなどの命名規則やCSS Modulesの導入も検討しています。

参考にしたリソース
MDN Web Docs - クライアント側のフォーム検証 - カスタムエラーメッセージの実装において、validity APIの仕様を確認するのに役立ちました。

制作者
ポートフォリオサイト - ご自身の名前やサイト名

Frontend Mentor - @ご自身のユーザー名

GitHub - @ご自身のユーザー名