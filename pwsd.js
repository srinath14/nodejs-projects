var character="abcdefghijABCDEFGHIJKLMNOPqrstuvwxyz";
var pwsd='';
var length=8;
for(var i=0;i<length;i++){
    pswd+=character[Math.floor(Math.random()*10)];
}
console.log(pwsd);