var pm=require("path");
fp = "D:/Romil/Fsd-2/Chap.-2 Node/10_task_6.html";
path=pm.parse(fp);
if(path.ext == ".txt"){
console.log("Text Document");
}else{
console.log("Not a text Document");
}