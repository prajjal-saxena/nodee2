const path = require("path");

// console.log(path.dirname('C:\Users\Prajjal Saxena\Desktop\nodejss\path\path.js'))
// console.log(path.extname('C:\Users\Prajjal Saxena\Desktop\nodejss\path\path.js'))
// console.log(path.basename('C:\Users\Prajjal Saxena\Desktop\nodejss\path\path.js'))
const myPath = path.parse('C:\Users\Prajjal Saxena\Desktop\nodejss\path\path.js')
console.log(myPath.ext)
