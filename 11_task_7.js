{/* By using callbacks, we can write asynchronous code in a better way. The following example 
creates a new file called test.txt and writes "Hello World" into it asynchronously. */}

var fs = require('fs');
fs.writeFile('test.txt', 'Hello World!', function (err) {
if (err)
console.log("Error Generation" + err);
else
console.log('Write operation complete.');
});