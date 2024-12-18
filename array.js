

const marvel_heros =  ["aman " , " bhanu ", "hm"]
const dc_heros =  ["superman  " , " flash  ", "batman "]
//  marvel_heros.push(dc_heros);
//  console.log(marvel_heros);
//  console.log(marvel_heros);
//    const allhero  =  marvel_heros.concat(dc_heros)
//  console.log(allhero);
// spered operators  ...  
const allhero =  [... marvel_heros, ...dc_heros];
const   array = [4,5,6,[3,1],8,,9,[7]]
const new_array  = array.flat(Infinity)
 console.log(new_array);
 

console.log(Array. isArray('hitesh'))
// array from convert in array
console.log(Array. from('hitesh'))
console.log(Array. from( {name :'hitesh'}))// so it out put is empty []

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array .of(score1,score2,score3))



 

