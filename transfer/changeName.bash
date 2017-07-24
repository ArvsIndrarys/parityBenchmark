#!/bin/bash

### on donne en argument le nom du raspberry 

#on modifie le nom du raspberry
raspName="$1"
file='/etc/hostname'
file2='/etc/hosts'

rm $file
touch $file
echo $raspName >> $file
sed -i "6s/.*/127.0.0.1	$raspName/" $file2
