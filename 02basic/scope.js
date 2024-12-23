// let a= 100

// // var c = 20
// // {} it is scope
// if(true){
//     let a = 10
//     const b =20
//     //  var c = 30
//      console.log(`inner is `,a);// global and block scope  
    
// }
//  console.log(a);// print a and b is not define because it c
//  console.log(b);
// console.log(c);


// ***********************
function one (){
    const name = "akshay"

    function two (){
        const website = "youtube"
        // console.log(name);
        
    
    }
    //  console.log(website);
    two()
}
one()

if (true) {
    const username = "akshay"

    if(username ==="akshay"){
        const websitie = "chrome"
        // console.log(username   +   websitie);
        
    }
    // console.log(websitie);
    
} 


// +++++++++++++interesting +++++++++++

function addone (num){
    return num+1
}
addone(5)

// expiration
//twoadd(4) it generates error because it function it declare in different type this is callled "HOSTING"
const twoadd = function(num){
    return num +2
}
twoadd(4)
