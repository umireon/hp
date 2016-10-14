#!/usr/bin/env sh
set -ev

PROJECT_DIR=`git rev-parse --show-toplevel`

$PROJECT_DIR/tools/build.sh
bundle exec htmlproofer ./_site

exit 0
