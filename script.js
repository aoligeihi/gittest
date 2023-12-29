const fs = require('fs');

const content = fs.readFileSync('./README.md', {
    encoding: 'utf-8'
});

// console.log(content);


const newContent = content.replace('此处是不想提交的', '');

fs.writeFileSync('./index.md', newContent);