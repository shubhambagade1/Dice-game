function curing(second){
   return function(type){
    return function(date){
       return function(massage){
            second(type,date, massage);
        }
    }
}
}
function second(type,date, massage){
    console.log("show type " + type);
    console.log("show massage " + massage);
    console.log("show massage " + date);
}

let a = curing(second);

let abc = a("error")(new Date());
let abcd = a("info")(new Date());
let abcde =a("debug")(new Date());

abc("validation error");
abcd("hello");
abcde("connetion done");
