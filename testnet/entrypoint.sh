#!/usr/bin/bash
chmod +x "/lotus/start_testnet.sh"
chmod +x "/lotus/set_env.sh"
/lotus/start_testnet.sh
source /filecoin_miner/scripts/env-client.bash
. /lotus/set_env.sh
cd /lotus/proxy
npm install
node index.js

