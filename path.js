// working with the path module

const { log } = require('console');
const path = require('path')

console.log(path.sep)

const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath);

// print the base name of the file
console.log(path.basename(filePath));

// absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);