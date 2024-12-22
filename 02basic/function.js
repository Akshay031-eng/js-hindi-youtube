// function with object ^^^^^^^^^^^^^
function calculatecardprice(val1,val2, ...num1){
    return num1
}
console.log(calculatecardprice(3 ,400,50,6000));// rest operators... it use all value print  store in array from  

const user = {
    username :"hitsh",
    prices: 234
}
function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.prices}`);
    
}

// handleobject(user)
handleobject({
    username: "sam",
    prices :212
})


const mynewarray = [200,6,789,78]
function returnsecondvalue( bss){
    return bss[1]
}
// console.log(returnsecondvalue(mynewarray));
console.log(returnsecondvalue([200,500,400,800]))

