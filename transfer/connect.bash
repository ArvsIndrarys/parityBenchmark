#!/bin/bash

#On récupère l'enode dans le document ./enode puis on se relie à la blockchain grâce à lui
enode=$(cat ./enode)
curl --data '{"jsonrpc":"2.0","method":"parity_addReservedPeer","params":["'$enode'"],"id":1}' -H "Content-Type: application/json" -X POST localhost:8540
