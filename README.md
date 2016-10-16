# hp(kari) [![Build Status](https://travis-ci.org/nimiusrd/hp.svg?branch=master)](https://travis-ci.org/nimiusrd/hp)

# [GitHub Pages](https://pages.github.com/) + [Jekyll](https://jekyllrb.com/) + [TravisCI](https://travis-ci.org/) => タダで継続的インテグレーションでマークダウンなホームページ

# 開発準備

動作確認はArch Linuxのみ。

## Mac OSX or Linux

### このリポジトリをローカルにコピーする。

```bash
$ git clone git@github.com:nimiusrd/hp.git
```

### RubyGemsを使うのでRubyをインストールする。詳しくは[Rubyのインストール手順](https://www.ruby-lang.org/ja/documentation/installation/)

```bash
# MAC OS X
$ brew install ruby
# Ubuntu or Debian
$ sudo apt-get install ruby
# Arch Linux
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
