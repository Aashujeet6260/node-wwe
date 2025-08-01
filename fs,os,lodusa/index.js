// const fs =  require('fs')
// var a = fs.appendFileSync('file.txt', 'Hello World!\n', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });
// var b =  fs.readFileSync('file.txt','utf8', function (err, data) {
//   if (err) throw err;
//   console.log(data);
// });



const node = require('./node.js');

var a = node.a;

result = node.addNumber(a, 10);
console.log(result); // Output: 15
