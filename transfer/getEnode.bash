#!/bin/bash

#on supprime le document initial
rm ./enode
#On récupère l'enode du noeud puis on l'ajoute dans un fichier ./enode
enode=$(curl --data '{"jsonrpc":"2.0","method":"parity_enode","params":[],"id":0}' -H "Content-Type: application/json" -X POST localhost:8540 | jq '.result')
echo $enode | sed 's/^"\(.*\)"$/\1/' >> ./enode
