#!/usr/bin/env node

const mdLinks = require('./lib/index.js');
const file = process.argv[2];

mdLinks(file)
    .then((result) => {
        result.forEach((item) => {
            console.log(item.href, item.text)
        })
    })
    .catch((error) => console.log(error))