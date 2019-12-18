var pandoc = require('node-pandoc')
const path = require('path');
const fs = require('fs');
const  __rootDir = path.dirname(__dirname,'..');
const stdArgs ='-f markdown -t rst';

// set the input chapter 
const docChapters= ['sezione1-funzionamento-generale-del-sistema',
					'sezione2-gestione-posizione-debitoria',
					'sezione3-specifiche-tecniche',
					'sezione4-adesione-al-sistema'
					]

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

var processDocument = function (chapter,file) {
	    // build output directory
	    outDirectoryPath = path.join(__rootDir, '_docs',chapter);
	    var pos = file.lastIndexOf(".");
	    rstFile = file.substr(0, pos < 0 ? file.length : pos) + ".rst";
		outFile=path.join(outDirectoryPath, rstFile);
		args = stdArgs + ' -o ' + outFile;
		// pandoc generation 
		console.log(path.join(__rootDir,chapter,file) + '-> '+ outFile)
		pandoc(path.join(__rootDir,chapter,file), args,function(err,result){
			if (err) console.log('unable to convert :' + err);
			return result;
		});
}

var processChapter =  function (chapter){
	// read all markdown files
	fs.readdir(path.join(__rootDir,chapter),function(err,files){
		markdownFiles = files.filter(function(e){
		return path.extname(e).toLowerCase() === '.md'
	})
	
	markdownFiles.forEach(function(files){
		// process each markdown file found
		processDocument(chapter,files);
	});
	})
} 


asyncForEach (docChapters,chapter=>{

	console.log('chapter: ',chapter);
	 processChapter(chapter);
})



