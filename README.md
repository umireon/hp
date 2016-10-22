# hp(kari) [![Build Status](https://travis-ci.org/nimiusrd/hp.svg?branch=master)](https://travis-ci.org/nimiusrd/hp)

# [GitHub Pages](https://pages.github.com/) + [Jekyll](https://jekyllrb.com/) + [TravisCI](https://travis-ci.org/) => タダで継続的インテグレーションでマークダウンなホームページ

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
├── .editorconfig    # ref: http://editorconfig.org/
├── .gitignore
├── .travis.yml      # Travis CI config
├── Gemfile          # A format for describing gem dependencies for Ruby programs  
├── Gemfile.lock     # To record the exact versions that were installed
├── README.md
├── _config.yml      # Jekyll config
├── _site            # The folder for built output files
│   └── ...
├── deploy_key.enc   # SSH key to deploy in Travis CI
├── src
│   ├── _layouts    # The folder for template style
│   │   └── ...
│   ├── _posts      # The folder for text content
│   │   └── ...
│   ├── css
│   │   └── ...
│   └── index.html
└── tools           # The folder for local development and deployment tools
    ├── build.sh    # Builds the project from src to _site folder  
    ├── deploy.sh   # Deploys built file
    ├── server.sh   # Starts the local server
    └── test.sh     # Test built output

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

aptにあるRubyは古すぎてお話にならないので[rvm](https://rvm.io/)を使う。
詳しい人が手順を追記してください。
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
そのうち

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

# ツール（予定）

## [textlint](https://textlint.github.io/)

コンテンツの品質を保つため。

## [PostCSS](http://postcss.org/)

CSSの規格を先取りして書ける。
品質管理もできるっぽい。
[Sass](http://sass-lang.com/)でもいいが独自の構文を覚えるのが面倒。

## [ESLint](http://eslint.org/)

JavaScriptの品質を保つため。

## [Babel](https://babeljs.io/)

[ES2016](http://www.ecma-international.org/ecma-262/7.0/)で書けるようにするため。
IEなどの古いブラウザを捨てるならいらない。
EcmaScriptについては[ECMAScriptとは何か？](https://azu.github.io/slide-what-is-ecmascript/)がわかりやすいかも。

## [Webpack](https://webpack.github.io/)

ビルドツール。ツールの兼ね合いで使わないかも。

# FAQ
## RubyGemsで入れたパッケージ（`bundle` `jekyll` ...etc）が動かないんだけど？
実行できるようにパス（環境変数）を通しましょう。
ターミナルを起動したときに読み込まれるファイル（`.bash_profile` `.zshenv`など。なければ作成する。）に下のように追加することで解決できます。

```bash:.bash_profile
PATH="$HOME/.gem/ruby/2.3.0/bin:$PATH"
```

追加した後にターミナルを再起動するか`source ~/.bash_profile`するのを忘れないでください。
