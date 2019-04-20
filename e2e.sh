#!/usr/bin/env bash
set -ev

yarn export
yarn serve &

# wait for server to start
while ! curl -s localhost:5000 >/dev/null; do
  sleep 1
done

set +e
yarn run cypress run
RESULT=$?

# kill serve process
kill %1

exit ${RESULT}
