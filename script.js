const fs = require('fs');

const content = fs.readFileSync('./README.md', {
    encoding: 'utf-8'
});

console.log(content);
