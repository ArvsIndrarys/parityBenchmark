#!/bin/bash

ip="$1"

scp ~/Documents/transfer/* $ip:~/parity/
