#!/bin/sh

boot_dev_server_cmd="yarn dev"

if [ $(pgrep --count --full "$boot_dev_server_cmd") -eq 0 ]; then
  # dev server don't respone to head request,
  # so add `http-get` to send a get request.
  yarn start-server-and-test \
    "$boot_dev_server_cmd" http-get://localhost:3000 "$1"
else
  $1
fi
