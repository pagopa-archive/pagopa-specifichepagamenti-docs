const PoweredFileSystem = require('pwd-fs');
const path = require('path');



const  __rootDir = path.join(__dirname,'..');
const  __imagesDir = path.join(__rootDir,'images');
const  __docsDir = path.join(__rootDir,'_docs','images');

console.log('src: ',__imagesDir);
console.log('dst: ',__docsDir);
var fs = require("fs-extra");

// Async with promises:
fs.copy(__imagesDir, __docsDir)
  .then(() => console.log('success!'))
  .catch(err => console.error(err))