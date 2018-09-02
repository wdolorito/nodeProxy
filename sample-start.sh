#!/bin/sh
for D in hello*
do
  cd $D
  node index.js&
  cd ..
done

node index.js
