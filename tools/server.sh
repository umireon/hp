#!/usr/bin/env bash
set -e

rm -vrf _site

yarn run build
bundle exec jekyll serve
