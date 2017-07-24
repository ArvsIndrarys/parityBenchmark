#!/bin/bash

ip="$1"

scp $ip:~/parity/* ~/Documents/transfer/
rm ~/Documents/transfer/nodePoA.toml
