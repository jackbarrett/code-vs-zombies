var fs=require("fs");
var deps=[
  "./entities.js",
];
var str="";
for(var x in deps){
  str+=fs.readFileSync(deps[x],"utf8");
  str+="\n";
}
fs.writeFileSync("./out/script.js",str,"utf8");
