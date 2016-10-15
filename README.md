# hp(kari)
[![Build Status](https://travis-ci.org/nimiusrd/hp.svg?branch=master)](https://travis-ci.org/nimiusrd/hp)

------------------------

# [GitHub Pages](https://pages.github.com/) + [Jekyll](https://jekyllrb.com/) + [TravisCI](https://travis-ci.org/) => タダで継続的インテグレーションでマークダウンなホームページ

----------------------

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
