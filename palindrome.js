function isPalindrome(){
    var reversed=""
    var birthDate=document.getElementById("date").value;
    console.log(birthDate);  
    var digits="";
    for(var i=0;i<birthDate.length;i++)
    {
             if(!isNaN(birthDate[i])){
                  digits=digits+birthDate[i];
    }
}
for(var i=digits.length-1;i>=0;i--){
    reversed=reversed+digits[i];
    console.log(reversed);
}
    // console.log(digits);

    // var reversed=0;
    // var temp=parseInt(digits);
    // var rem;
    // while(temp>0)
    // {
    //     rem=temp%10;
    //     reversed=reversed*10 + rem;
    //     temp=temp/10;
    // }
    console.log(reversed);
  if(digits===reversed)
    document.getElementById("output").innerText="yay you have palindrome birth date!!";
   else  
   document.getElementById("output").innerText="oops your birth date is not a palindrome!!";

}