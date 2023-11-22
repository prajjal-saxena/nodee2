const fs = require('fs');

// fs.writeFile('read.txt', "today is awesome day", (err)=>{
//     console.log("file is created")
// });

// fs.appendFile('read.txt', "this is index.js" , (err)=>{
//     console.log("Task completed")
// })

fs.readFile("read.txt", "UTF-8", (err, data) => {
    console.log(data)
})