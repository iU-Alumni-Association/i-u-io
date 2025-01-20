# i-u-io

## 必要な環境

本プロジェクトを利用する上で必要なもの。

- **Node.js**: バージョン 16.x 以上
- **Yarn**: パッケージマネージャー
- **Hugo**: 拡張版バイナリ（`hugo_extended`）

以下のコマンドで環境が整っているか確認:

```bash
node -v
yarn -v
hugo version
```

`hugo version` の結果に `extended` が含まれているか注意。

## 環境構築

1. **リポジトリをクローン**

   ```bash
   git clone git@github.com:iU-Alumni-Association/i-u-io.git
   cd i-u-io
   ```

2. **依存関係をインストール**

   ```bash
   yarn install
   ```

3. **Hugo の設定を確認**

   `config.yaml` を開いて必要な設定を確認・編集。

## 開発の流れ

### 1. 開発サーバーの起動

以下のコマンドを実行すると、開発サーバーが起動し、ブラウザでリアルタイムプレビューが可能:

```bash
yarn dev
```

- Hugo の開発サーバー
- Tailwind CSS の変更監視
- JavaScript ファイルの変更監視

### 2. ファイル編集

- **HTML / テンプレート**: `layouts/` 以下のファイルを編集。
- **CSS**: `assets/css/style.css` を編集してスタイルを調整。
- **JavaScript**: `assets/js/` 以下のファイルを編集。

### 3. ビルド確認

以下のコマンドを実行して、本番環境用の静的ファイルを生成:

```bash
yarn build
```

生成されたファイルは `public/` ディレクトリに出力。

### 4. 本番環境デプロイ

生成された `public/` ディレクトリを任意のホスティングサービス（例: Cloudflare Pages, Netlify, Vercel）にデプロイ。

## トラブルシューティング

### Hugo が動作しない場合

- Hugo のバージョンを確認し、`extended` がインストールされているか確認。

### 開発サーバーが自動リロードしない場合

- `yarn dev` を再実行。
- `--watch` オプションが有効になっているか確認。

## 使用ライブラリ

### Dependencies
- **[@tailwindcss/typography](https://github.com/tailwindlabs/tailwindcss-typography)**: Tailwind CSS の Typography プラグイン
- **[daisyui](https://daisyui.com/)**: Tailwind CSS 用のコンポーネントライブラリ

### DevDependencies
- **[autoprefixer](https://github.com/postcss/autoprefixer)**: CSS にベンダープレフィックスを自動付与
- **[concurrently](https://github.com/open-cli-tools/concurrently)**: 複数のコマンドを並行実行
- **[esbuild](https://esbuild.github.io/)**: 超高速の JavaScript バンドラー
- **[postcss](https://postcss.org/)**: CSS 処理ツール
- **[prettier](https://prettier.io/)**: コードフォーマッタ
- **[prettier-plugin-go-template](https://github.com/NiklasPor/prettier-plugin-go-template)**: Go テンプレート用の Prettier プラグイン
- **[tailwindcss](https://tailwindcss.com/)**: ユーティリティファーストの CSS フレームワーク

---

# Hugo と Tailwind CSS の概要

## Hugo とは

Hugo は、静的サイトジェネレーターの一種であり、動的なウェブサイトを構築する代わりに、HTML ファイルを事前に生成することでウェブサイトを提供するツール：

- **高速性**  
  Hugo は Go 言語で実装されており、大量のコンテンツを高速にビルドできる。ページ数が数千を超える大規模なサイトでも短時間で構築可能。

- **柔軟なテンプレートエンジン**  
  Go 言語のテンプレート機能を活用して、ページのデザインや構造を柔軟に制御できる。ヘッダーやフッターなどの共通部分を簡単に再利用できるため、効率的な開発が可能。

- **Markdown のサポート**  
  コンテンツは主に Markdown 記法で記述されるため、技術的な知識が少ない人でも簡単に記事を作成・編集できる。

- **静的ファイル生成**  
  生成されたサイトは純粋な HTML、CSS、JavaScript ファイルで構成されるため、高速でセキュアなウェブサイトを構築できる。

## Tailwind CSS とは

Tailwind CSS は、HTML を直接操作しながらデザインを構築するためのユーティリティファーストの CSS フレームワーク。

- **ユーティリティクラスの利用**  
  Tailwind CSS では、CSS のクラス名がスタイルの役割を明確に示す。例えば、`text-center` はテキストを中央揃えにし、`bg-blue-500` は背景色を青に設定する。このような直感的なクラス名によって、CSS ファイルを直接編集せずにデザインを調整できる。

- **カスタマイズ性**  
  Tailwind CSS には設定ファイルがあり、配色やフォントサイズなどをプロジェクトに合わせて簡単に変更できる。また、独自のユーティリティクラスを定義することも可能。

- **モバイルファーストのデザイン**  
  レスポンシブデザインが容易に実現できる。`sm:`, `md:`, `lg:`, `xl:` などのプレフィックスを使うことで、特定の画面サイズに応じたスタイルを適用できる。

## サンプル実装
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="/css/style.css" rel="stylesheet" />
    <title>{{ .Title }}</title>
    {{ with .Site.Params.customCSS }}
      {{ . | safeHTML }}
    {{ end }}
  </head>
  <body
    class="{{ block "body-class" . }}bg-base-100 text-base-content{{ end }}">
    {{ partial "header.html" . }}


    <main class="container px-4 py-8 mx-auto mt-16">
      {{ block "main" . }}
      {{ end }}
    </main>

    {{ partial "footer.html" . }}
  </body>
</html>
```