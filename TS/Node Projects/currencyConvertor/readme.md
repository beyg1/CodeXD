node package command to run from any cli 'npx currency-convertor-pkr-jul-24'
Project Node environment creation commands:
 tsc --init
 tsc
 npm init -y
 npm i @types/node -D
 npm install inquirer@9.2.23
Tsconfig manipulation: "target" : "ES2020" &&  "module" : "NodeNext" 
package.json manipulation: "type": "module",    "bin":"index.js"
add shabang statement on top of main file : #! /usr/bin/env node
npm publish to push your node package to npm site