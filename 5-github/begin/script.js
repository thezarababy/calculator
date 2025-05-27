let display = document.getElementById("display");


function toDisplay(input){
    display.value+=input
}

function toClear(){
    display.value="";

}
 function  toCalculate(){
    try{
     let result=eval(display.value);
     display.value= result;
    }
     catch(error){
        display.value ='Error';
       }
 }
 function goBack(){
    display.value = display.value.slice(0,-1);
 }


 // let clear = document.getElementById("clear");
// let goBack = document.getElementById("goBack");
// let divide = document.getElementById("divide");
// let seven = document.getElementById("seven")
// function inc(){
//     display.innerHTML=0;
// }
// function num7 (){
// display.innerHTML= 7;
// }