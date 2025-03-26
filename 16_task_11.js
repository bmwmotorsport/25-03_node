var fs=require("fs");
var os=require("os");

f = os.tmpdir();
p = os.platform();
fs.writeFileSync(f + "/AA/xyz.txt","Hello")

if(p == "win32"){
    fs.writeFileSync(f+"/AA/xyz.txt","You are working on windows 32 bit")
}
else{
fs.writeFileSync(f+"/AA/xyz.txt","You are working on windows 64 bit")
}
