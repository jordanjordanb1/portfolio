#!/usr/bin/env bash

echo "Start script has begun!"

# Starts server
npx pm2 start ./bin/www -i 0


echo "Start script has finished!"