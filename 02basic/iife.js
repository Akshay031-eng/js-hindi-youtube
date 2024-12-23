// immediately invokes function expression( IIFE)  
// global scope ka pollution sa problem hoti hai kyhi bar toh so global pollution or decaleration hata na ka liye then use IIFE
(function chai (){
        console.log(`DB system`);
        
})();

// in iife then after one function then end function then use ;(explicitively)
(function chaior (){
    // it is a name iife
    console.log(`DB hffjeu system`);
    
})();

( (name )=>{
    // it is simple iife
    console.log(`${ name}   bhanu is cartage collector of uncle `);

})(`pagal`)
 