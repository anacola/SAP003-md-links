const fs = require('fs');
const arr = [];


function mdLinks(file) {
    return new Promise((resolve,reject) => {
        fs.readFile(file, 'utf8', (err, data) => {
            if (err){
                reject(err.message)
            } else {
                const regex = data.match(/\[(\S.*)\]\((http.*?\))/gm);
                regex.forEach((i)=> {
                    const text = i.match(/\[(\S.*)\]/)[1];
                    const href = i.match(/\((http.*)\)/)[1];
                    arr.push({text, href})
                    })
                   
                resolve(arr)
            }
        })
    })
}
   

module.exports = mdLinks;