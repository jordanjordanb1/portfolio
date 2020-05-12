#!/usr/bin/env bash

echo "Start script has begun!"

client="./client"
server_node="./node_modules"
client_node=client+"/node_modules"

# Clears node_modules folder if it exists to make no errors occur
[ -f server_node ] && rmdir server_node && echo "Deleting server /node_modules/!"
[ -f client_node ] && rmdir client_node && echo "Deleting client /node_modules/!"

# Runs npm install
npm i && npm i --prefix ./client

# Builds client
npm run build --prefix client

# Starts server
npx pm2 start ./bin/www -i 0
