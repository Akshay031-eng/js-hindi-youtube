// singleton  : koi constructor literal ki tara use kar ta hai toh singleton nhi bn ta hai 


// object literals 
//   Object.create 

// const mysym  =  Symbol("key1")// symbol is user [symbol] so it return type is symbol

// const jsuser =  {

// name : "bhanu",
// "full name"  : "bhanu pratap",
// [mysym]: "mykey1",
// Age : 28,
// location : "jaipur",
// email :"bhanupraatap@gmail.com",
// lastlogin : false,
// }

// console.log(jsuser.lastlogin);
// console.log(jsuser["full name"]);
// console.log(jsuser[mysym]);
// console.log(typeof(jsuser.mysym));


// Object.freeze(jsuser)
// console.log(jsuser);

// function  * **********
// jsuser .greeting = function(){
//     console.log("hello jsuser");
    
// }
// jsuser .greetingtwo = function(){
//     console.log('hello ,${this.email}');
    
// }

// console.log(jsuser.greeting());
// console.log(jsuser.greeting);
// console.log(jsuser .greetingtwo());


// ************************************************************
// part 2**********************
const tinder = new Object()// singleton 
tinder.id = "nepal"
tinder.name = "akshay"
console.log(tinder);

const public = {
    id :" naman",
    fullname : {
        username :{
            firstname : "hikhil",
            lastname : "choudary"
        }

    }
}
// console.log(public);

const ob1 ={1: "e",2: "h"}
const ob2 ={4: "f",3: "h"}
// const ob3 =  Object.assign({} , ob1, ob2)
const ob3 = {...ob1, ...ob2}
console.log(ob3);

const user = [
    {
        id : "m",
        name : "aksh",
    },
    {
     roll: 123,

    },
    {
class: "foutth",
    }
]

user[1].class
console.log(Object.keys(tinder));
console.log(Object.values(tinder));
console.log(Object.entries(tinder));





