# hp(kari) [![Build Status](https://travis-ci.org/nimiusrd/hp.svg?branch=master)](https://travis-ci.org/nimiusrd/hp)

----
- [ディレクトリ構造](https://github.com/nimiusrd/hp#ディレクトリ構造)
- [開発準備](https://github.com/nimiusrd/hp#開発準備)
 - [Mac OSX or Linux](https://github.com/nimiusrd/hp#mac-osx-or-linux)
 - [Windows](https://github.com/nimiusrd/hp#windows)
- [ツール](https://github.com/nimiusrd/hp#ツール予定)
- [FAQ](https://github.com/nimiusrd/hp#ツール予定)

----

# ディレクトリ構造

```

.
├── .editorconfig       # ref: http://editorconfig.org/
├── .eslintrc.js        # ESlintの設定
├── .gitignore          # Gitの設定
├── .travis.yml         # Travis CIの設定
├── Gemfile             # Gemの依存関係のリスト
├── Gemfile.lock        # 実際にインストールしたGemのバージョン
├── README.md
├── _config.yml         # Jekyllの設定
├── _site/              # Jekyllでビルドしたときの出力先
├── deploy_key.enc      # Travis CIでdeployするためのSSH鍵
├── package.json        # node_modulesの依存関係やnpm scriptsなどの設定
├── postcss.config.js   # PostCSSで使うモジュールの設定
├── src/                # Jekyllのビルドで使うフォルダ
│   ├── _includes/      # コンポーネント
│   ├── _layouts/       # テンプレート
│   ├── _posts/         # テキスト
│   ├── about/          # /about/ページ
│   ├── assets/         # Webpackでbundleしたファイルの出力先
│   │   ├── css/
│   │   └── js/
│   ├── contact/        # /contact/ページ
│   ├── index.html      # /ページ
│   └── news/           # /news/ページ
├── stylelint.config.js # Stylelintの設定
├── tools/              # シェルスクリプトなど
├── webpack/            # Webpackでビルドされるファイル
│   ├── entry.js
│   ├── entry2.js
│   ├── js/
│   └── postcss/
├── webpack.config.js   # Webpackの設定ファイル
└── yarn.lock           # 実際にインストールしたoonde_modulesのバージョン
```

# 開発準備

動作確認はArch Linuxのみ。

## Mac OSX or Linux

### このリポジトリをローカルにコピーする。

```bash
$ git clone git@github.com:nimiusrd/hp.git
```

### RubyGemsを使うのでRubyをインストールする。詳しくは[Rubyのインストール手順](https://www.ruby-lang.org/ja/documentation/installation/)

MAC OS X

```bash
$ brew install ruby
```

---------

Ubuntu or Debian

```
$ git clone https://github.com/rbenv/rbenv.git ~/.rbenv
$ git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
$ echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bash_profile
$ echo 'eval "$(rbenv init -)"' >> ~/.bash_profile
$ rbenv install 2.3.3
$ rbenv local 2.3.3
```

--------

Arch Linux

```bash
$ sudo pacman -S ruby
```

### RubyGemsを使って[Bundler](http://bundler.io/)をインストールする。

```bash
$ sudo gem install bundler
```

### `Gemfile.lock`にある必要なファイルをインストールする。

```bash
$ bundle install
```

## Windows

Dockerを使う方法を検討中…

# ローカルでの開発

## テスト

```bash
#リポジトリのルートに移動する
$ cd path/to/repo
$ ./tools/test.sh
```

## localhostでプレビューする

```bash
#リポジトリのルートに移動する
$ cd path/to/repo
$ ./tools/server.sh
```
<http://127.0.0.1:4000/hp/>を開く

# ツール

## ホスティングサービス

### [GitHub Pages](https://pages.github.com/)

タダ．管理しやすい．

## 静的ページジェネレータ

### [Jekyll](https://jekyllrb.com/)

Rubyであることが欠点だが，他は簡単にできる．

## ビルドツール

## [Babel](https://babeljs.io/)

[ES2016](http://www.ecma-international.org/ecma-262/7.0/)で書けるようにするため．
IEなどの古いブラウザを捨てるならいらない．
EcmaScriptについては[ECMAScriptとは何か？](https://azu.github.io/slide-what-is-ecmascript/)がわかりやすいかも．

## [Webpack](https://webpack.github.io/)

CSSとJavaScriptをまとめて，minifyする．

## テスティングフレームワーク

### [TravisCI](https://travis-ci.org/)

CI（継続的インテグレーション）ツール．
これで自動てテストを行って全部通ったらgh-pagesにデプロイする形にしている．
他のホスティングサービスに乗り換えやすいような作りにしている．

### [textlint](https://textlint.github.io/)

自然言語のLinter.
コンテンツの品質を保つため．
ルールは自分で設定する．

### [PostCSS](http://postcss.org/)

CSSのトランスパイラー．
現行のブラウザで使えるCSSの規格よりも先の機能（CSS4のプロポーザルなど）を使える.

### [StyleLint](http://stylelint.io/)

CSSのLinter.

## [ESLint](http://eslint.org/)

JavaScriptのLinter.

# FAQ
## RubyGemsで入れたパッケージ（`bundle` `jekyll` ...etc）が動かないんだけど？
実行できるようにパス（環境変数）を通しましょう．
ターミナルを起動したときに読み込まれるファイル（`.bash_profile` `.zshenv`など。なければ作成する。）に下のように追加することで解決できます．

```bash:.bash_profile
PATH="$HOME/.gem/ruby/2.3.0/bin:$PATH"
```

追加した後にターミナルを再起動するか`source ~/.bash_profile`するのを忘れないでください．
