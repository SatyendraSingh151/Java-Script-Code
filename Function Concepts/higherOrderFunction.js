alert("Hyy!, go to the console of the website to check the output of the higher order function");
alert("You can call the methods/object members by the name");

// 1)   higher order function ->  when a function is passed as a paremeter in any other function


// taking a function as an argument and count to run the loop 
function grettingToPeople(func,count){
    for(let i=1;i<=count;i++){
        func();
    }
}

// declaration of a function
function welcome(){
    console.log("Hello Satya");
    
}


// calling the function and passing  a function alone with the value to run the loop
grettingToPeople(welcome,10);
 

// making the methods using  objects concept
let Calculators = {
    n:151,

    sum : function add(a,b){
        return a+b;

    },

    sub : function subs(a,b){
        return a-b;
    },
    mul : function mult(a,b){
        return a*b;
    },
    div : function div(a,b){
        return a/b;
    },
    mod : function mod(a,b) {
        return a%b;
    }
}


