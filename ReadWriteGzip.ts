//var fs = require("fs");
//var zlib = require('zlib');

import * as fs from 'fs'
import * as zlib from 'zlib'



// Compress the file input.txt to input.txt.gz
fs.createReadStream('./input.txt')
   .pipe(zlib.createGzip())
   .pipe(fs.createWriteStream('input.txt.gz'));
  
console.log("File Compressed.");