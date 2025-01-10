const myobj = {
    js : "javascript ",
    cpp : "C++",
    rb : "ruby",
    shift : "shift of apple"

}

// objecyt iteration for in
for (const key in myobj) {
    // console.log(` ${key} is a shortcut of ${myobj[key]}`);
    }

    // forin for array *************
    const programming =  ["js", "rb", "java "]
    for (const key in programming) {
      console.log(programming[key])
    //   output:  0,1,2 in forin loop but in forof it give the value of 
    }
    //  Lecture 29: 
 const  coding = [ "js ", "htmlm", "ruby"]
//  it usee a call back function in foreach so it not use function name 
//  coding.forEach( function (val) {
//      console.log(val)
//  })
// coding .forEach( (i) => {
//   console.log(i)
     
//      })

// function print(m){
//   console.log(m)
// }
// coding.forEach(print)

// it method use for the value and index and all array  
// coding.forEach((value , index,  arr)=>{
//     console.log(value , index, arr)
// })

// const mycoding = [
//   {
//     languagename :"java",
//     languagefilename : "ja"
//   },
//   {
//      languagename :"javascript",
//     languagefilename : "js"
//   },
//   {
//      languagename :"python",
//     languagefilename : "py"
//   }

// ]

mycoding.forEach((item)  => {
  console.log(item.languagename)
})
//  const  coding = [ "js ", "htmlm", "ruby"]
//  it usee a call back function in foreach so it not use function name 
//  coding.forEach( function (val) {
//      console.log(val)
//  })
// coding .forEach( (i) => {
//   console.log(i)
     
//      })

// function print(m){
//   console.log(m)
// }
// coding.forEach(print)

// it method use for the value and index and all array  
// coding.forEach((value , index,  arr)=>{
//     console.log(value , index, arr)
// })

const mycoding = [
  {
    languagename :"java",
    languagefilename : "ja"
  },
  {
     languagename :"javascript",
    languagefilename : "js"
  },
  {
     languagename :"python",
    languagefilename : "py"
  }

]

mycoding.forEach((item)  => {
  console.log(item.languagename)
})

// Lecture 30
const language  = ["hindi", "english" , "french"]
// foreach does not return the values it output id undefined
const values = language.forEach((item ) => {
  return item
})
console.log(values)

const mynum  =  [1,2,3,4,5,6,7,,8,9,10,11]
// filter it give a value in 
// const newmynum  = mynum.filter((num) => num>5  )
const newmynum  = mynum.filter((num) =>{
  return num>4}  )
console.log(newmynum)
// *******
const newnum  =  []
mynum.forEach((num) => {
   if(num >4){
    newnum.push(num)  }
})
console.log(newnum)



