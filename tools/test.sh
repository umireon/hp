#!/usr/bin/env bash
set -ev

PROJECT_DIR=`git rev-parse --show-toplevel`

$PROJECT_DIR/tools/build.sh
bundle exec htmlproofer ./_site
