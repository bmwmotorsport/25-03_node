// var os=require("path");
{/* basename() Returns the last part of a path
    dirname() Returns the directories of a path
    extname() Returns the file extension of a path */}

var pm=require("path");
path=pm.dirname("D:/Romil/Fsd-2/Chap.-2 Node/10_task_6.html");
console.log(path);
path=pm.basename("D:/Romil/Fsd-2/Chap.-2 Node/10_task_6.html");
console.log(path);
ext = pm.extname("D:/Romil/Fsd-2/Chap.-2 Node/10_task_6.html")
console.log(ext);
path=pm.parse("D:/Romil/Fsd-2/Chap.-2 Node/10_task_6.html");
console.log(path);

{/* D:/Romil/Fsd-2/Chap.-2 Node
10_task_6.html
.html
{
  root: 'D:/',
  dir: 'D:/Romil/Fsd-2/Chap.-2 Node',
  base: '10_task_6.html',
  ext: '.html',
  name: '10_task_6'
} */}