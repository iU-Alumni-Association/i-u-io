# i-u-io

## インストール

```bash
yarn install
```

## スクリプト

本プロジェクトでは利用できるスクリプト:

### JavaScript のビルド

```bash
yarn build:js
```

`assets/js` 内の JavaScript ファイルをバンドルして `static/js` ディレクトリに出力します。

### JavaScript の開発モード

```bash
yarn dev:js
```

JavaScript ファイルを監視し、変更があれば自動でビルド。

### CSS のビルド

```bash
yarn build:css
```

Tailwind CSS を使って `assets/css/style.css` をコンパイルし、`static/css/style.css` に出力。

### 開発サーバーの起動

```bash
yarn dev:server
```

Hugo の開発サーバーを起動し、コンテンツの変更をリアルタイムで反映する。

### 開発モード全体

```bash
yarn dev
```

以下のプロセスを並行して実行:
- Hugo 開発サーバーの起動
- Tailwind CSS の監視
- JavaScript の監視

### 本番ビルド

```bash
yarn build
```

以下のプロセスを順番に実行し、本番用のファイルを生成:
1. CSS のビルド
2. JavaScript のビルド
3. Hugo のビルド

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