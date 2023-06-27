//var fs = require("fs");
//var zlib = require('zlib');

import * as fs from 'fs'
import * as zlib from 'zlib'


async function readAndCreateGzFile()
{
// Compress the file input.txt to input.txt.gz


let temp =  fs.createReadStream('./input.txt')
   .pipe(zlib.createGzip())
   .pipe(fs.createWriteStream('input.txt.gz'));
  
console.log("File Compressed.");

}

readAndCreateGzFile()
