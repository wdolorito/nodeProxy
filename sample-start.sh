#!/bin/sh
NODE=./node_modules/nodemon/bin/nodemon.js
for D in hello*
do
  cd $D
  ${NODE} index.js&
  cd ..
done

${NODE} index.js
