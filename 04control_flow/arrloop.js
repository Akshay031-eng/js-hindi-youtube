// all loops arae array specific loop 
// for of


// [" ", " "]
// [{} {} ,]

const arr =[1,3,4,5,6]
for (const num of arr) {
    // console.log(num);
    
}
const greeting  =  "good morning"
for (const greet  of greeting) {
    if(greet == "d"){
        // console.log(greet);
        break

    }
    //  console.log(greet);
}


// MAPS *************
const map =  new Map()
map.set('IN' , "India")
map.set('USA' , "America is usa country")
map.set('fr' , "France")
// console.log(map);
// console.log(map.size)
for (const key of map) {
    // console.log(key);
    // output is [ 'IN', 'India' ]
// [ 'USA', 'America is usa country' ]
// [ 'fr', 'France' ]
    
}
for (const [key ,value]of map) {
    console.log(key , `:-` ,value);
}

