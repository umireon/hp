#!/usr/bin/env bash
set -e
ACCENT="\e[0;36;1m"
ACCENT_OFF="\e[m"

if [[ $JEKYLL_ENV = "production"  ]]; then
  echo -e "${ACCENT}producion build${ACCENT_OFF}"
else
  echo -e "${ACCENT}development build${ACCENT_OFF}"
  rm -rf _site
fi

bundle exec jekyll build
