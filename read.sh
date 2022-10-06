#!/bin/sh
file="tragetJS1.txt"
while IFS= read line
do
    # display $line or do something with $line
    wget "$line"
done <"$file"
