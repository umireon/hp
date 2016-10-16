#!/usr/bin/env bash
set -ev

rm -rf _site

bundle exec jekyll serve
