var character="0123456789";
var otp='';
var length=4;
for(var i=0;i<length;i++){
    otp+=character[Math.floor(Math.random()*10)];
}
console.log(otp)