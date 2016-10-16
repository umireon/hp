#!/usr/bin/env bash
set -e

rm -rf _site

bundle exec jekyll serve
