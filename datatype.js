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