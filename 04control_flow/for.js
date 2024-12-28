// for
for (let i = 0; i < 10; i++) {
    const element = i;

    if(element == 5){
        // console.log(`5 is abest number`);
    }
    // console.log(element);
    
}


for (let i =0;i <=10 ;i++) {
    // console.log(`Outer loop is ${i}`);
    for (let j= 0; j <=10; j++) {
        // console.log(`Inner loop is ${j}  and the Outer loop is ${i}`);
        // tables of 1 to 10
        // console.log(i +'*' + j + '=' + i*j); 
       
    }
}

const  myarr =  ["akshay " ,"bhanu", "manik"]
// console.log(myarr.length);
for (let i =  0; i < myarr.length; i++) {
    const element = myarr[i]
    // console.log(element);
}

// break and continue
for (let index = 1; index <=20; index++) {
    const element = index;
    if(index == 5){
        // console.log(`5 is detected`);
        break
    }
    // console.log(`the value os i is ${index}`);
}

for (let index = 1; index <=20; index++) {
    const element = index;
    if(index == 5){
        // console.log(`5 is detected`);
        continue
    }
    // console.log(`the value os i is ${index}`);
}

// while loop****************
let a = 0
while (a <=10) {
   console.log(`the value of the is ${a}`);
   a =a+2 
}