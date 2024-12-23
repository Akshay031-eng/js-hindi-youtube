//  this keywords it refer to current content 

const user = {
    username : "bhanu",
    price : 879,
    welcomewebsities: function(){
   console.log(`${this.username}, welcome to websities`);
   console.log(this);
   
    }
}
// user.welcomewebsities()
// user.username ="akshay"
// user.welcomewebsities()

// console.log(this); //outputs is {} is emmpty because in enivronments in node

// in browser global object is window 

// function chai(){

//     console.log(this);// does not use this keywords in function in javascript

    
// }
// chai()


// arrow function ***************

const chai = ()=>{
    let username =  "akshay"
    // console.log(this .username);
    
}

// const addtwo  = (num1 ,num2) =>{
//     return num1+num2
// }
// implicit return function
// const addtwo =(num1,num2) => num1+num2
const addtwo =(num1,num2)=>({username :'akshay'})

console.log(addtwo(3,8));

