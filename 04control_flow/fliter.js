const num = [1,23,3,4,5,5,6,7]
//    const mynum = num.map((n ) => n+10)


//  chaning it basically use a map and filter with in the same row so it called the chaning 
 const mynum  = num
 .map((num )  => num*10)
 .map((num) => num+1)
 .filter((num) => num >= 41)
//   console.log(mynum);

// reduce 

const number = [1,2,3,4]
// const initialvalues = 10
// const total  = number.reduce(
//     (accumalter, currentvalue ) => accumalter    + currentvalue,
//     initialvalues
// )

const total = number.reduce(function(acc , cu) {
console.log(`acc is  : ${acc}  and cu is : ${cu}`);
return acc+  cu
},
5
)
  console.log(total);

  const shoppingcart =  [
    {
      itemname : "js ",
      price : 2343
    },
    {
      itemname : "js ",
      price : 2043
    },
    {
      itemname : "js ",
      price : 2345
    },
    {
      itemname : "js ",
      price : 2999
    }
  ]

    const to = shoppingcart.reduce((acc , item ) =>acc + item.price ,0 )
    console.log(to);
    
  
   
   