//Primitive call by value 
// 7 types : String , number ,null, undefined ,  boolean , symbol(unique datatype ), bigint

let id = Symbol('123')
// type of is symbol
let anotherid = Symbol('123')
console.log(id == anotherid)

// refernce type (nom primitive datatype)
// array,  object , function

const hero =  ["akshay" , "nikhil"]
// object
{
    name : "akshay"
    age : 19
}
  
const myfunction =function(){
    console.log("helllo woeld")

}
//function

console.log(typeof  myfunction)


//+++++++++++++++++++++++++++++++++

// stack (primitive )    heap (non primitive)
// stack ka andar hma copy mil thi hai
let myname =  "nikhil kumar"
let anothername = myname
anothername = "chaiwala nikhil"
console.log(myname)
console.log(anothername)

// heap kandar reference mil ta hai

let userone ={
    email : "akshay@123.com"

}
 let usertwo = userone
 
 usertwo.email = "hitesydf@.com"

 console.log(userone.email)
 console.log(usertwo.email)