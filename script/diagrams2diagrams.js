const PoweredFileSystem = require('pwd-fs');
const path = require('path');



const  __rootDir = path.join(__dirname,'..');
const  __diagramsDir = path.join(__rootDir,'diagrams');
const  __docsDir = path.join(__rootDir,'_docs','diagrams');

console.log('src: ',__diagramsDir);
console.log('dst: ',__docsDir);
var fs = require("fs-extra");


// test _docs/diagrams 
if (!fs.existsSync(__docsDir)) {
  fs.mkdirSync(__docsDir)
}

// Async with promises:
fs.copy(__diagramsDir, __docsDir)
  .then(() => console.log('success!'))
  .catch(err => console.error(err))