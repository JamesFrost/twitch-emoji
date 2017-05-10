#!/bin/sh

set -e

npm install -g --silent http-server

CURRENT_VERSION=$(npm run version --silent)

echo Current Twitch Emoji Verison: $CURRENT_VERSION

echo Copying files...
mkdir twitch-emoji@$CURRENT_VERSION
cp -R dist twitch-emoji@$CURRENT_VERSION

echo Starting server...
sudo http-server &
