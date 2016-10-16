#!/usr/bin/env bash
set -ev

if [[ $JEKYLL_ENV = "production"  ]]; then
  echo "producion build"
else
  echo "development build"
  rm -rf _site
fi

bundle exec jekyll build
