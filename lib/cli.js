#!/usr/bin/env node

const mdLinks = require('./index.js');
const file = process.argv[2];

mdLinks(file)
    .then((result) => {
        result.forEach((item) => {
            console.log(item.href, item.title)
        })
    })
    .catch((error) => console.log(error))