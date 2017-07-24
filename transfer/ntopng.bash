#!/bin/bash

apt-get remove ntopng
expect "(Y/n)"
send "Y"
apt-get install ntopng
