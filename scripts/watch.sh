#!/usr/bin/env bash
./node_modules/.bin/watchify -v -t babelify -o scripts/client-bundle.js src/client.jsx &s

for job in `jobs -p`
do
  wait $job
done
