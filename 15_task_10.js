var fs = require('fs');
var os = require('os');

f = os.tmpdir();
freemem=os.freemem()/1024/1024/1024;
fs.mkdirSync(f+"/AA");
if(freemem > 1){
fs.writeFileSync(f+"/AA/temp.txt","Sufficient memory")
} else{
fs.writeFileSync(f+"/AA/temp.txt","Low memory")
}