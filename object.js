// singleton  : koi constructor literal ki tara use kar ta hai toh singleton nhi bn ta hai 


// object literals 
//   Object.create 

const mysym  =  Symbol("key1")// symbol is user [symbol] so it return type is symbol

const jsuser =  {

name : "bhanu",
"full name"  : "bhanu pratap",
[mysym]: "mykey1",
Age : 28,
location : "jaipur",
email :"bhanupraatap@gmail.com",
lastlogin : false,
}

console.log(jsuser.lastlogin);
console.log(jsuser["full name"]);
console.log(jsuser[mysym]);
console.log(typeof(jsuser.mysym));




