const fs = require('fs');
const flagsfile = 'README.md';
const arr = [];


function mdLinks() {
    return new Promise((resolve,reject) => {
        fs.readFile(flagsfile, 'utf8', (err, data) => {
            if (err){
                reject(err.message)
            } else {
                const regex = data.match(/\[(\S.*)\]\((http.*\)?)/gm);
                regex.forEach((i)=> {
                    const title = i.match(/\[(\S.*)\]/);
                    const href = i.match(/\((http.*\)?)/gm);
                    arr.push({title,href})
                    })
                resolve(arr)
            }
        })
    })    
}

module.exports = mdLinks;