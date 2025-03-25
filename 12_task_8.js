// Writing data to file, appending data to file and then reading the file data using ES6 callback.

var fs=require("fs");
fs.writeFile("abc.txt","Today is a good day .\n",(err)=>{
 if(err){
 console.log("completed")
}});
fs.appendFile("abc.txt"," Is it???",(err)=>{
if(err)
{
 console.log("completed")
}});
fs.readFile("abc.txt",(err,data)=>{
if(err){
console.error(err);
}
console.log(data.toString())
});
console.log("File Operations ended")