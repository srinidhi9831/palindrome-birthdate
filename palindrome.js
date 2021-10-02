var db= document.querySelector("#date");
var button=document.querySelector("#button");

button.addEventListener("click",eventHandler)


function eventHandler(){
   if(validate(db.value))
      isPalindrome(db.value);
}


function digitsOnly(birthDate){

var splitDate= birthDate.split("-");
var digits=splitDate[2]+splitDate[1]+splitDate[0];
return digits;
}

function getReversed(digits){
    var reversed="";
    for(var i=digits.length-1;i>=0;i--){
       reversed=reversed+digits[i]; 
    }
    return reversed;
}

function isPalindrome(birthDate){
   console.log(birthDate)
    var digits=digitsOnly(birthDate);
    var reversed =getReversed(digits);
    
  if(digits===reversed)
    show("yay you have palindrome birth date!!");
   else  
    show("oops your birth date is not a palindrome!!");

}

function show(message){
    output.innerText=`${message}`;
}

function validate(date){
    if(date===""){
      alert("enter date");
      return false;
    }
    else{
        return true;
    }
}