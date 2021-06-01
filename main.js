//get input value
let x = document.getElementById('input');
let y;
//reverse input

function reverseInput(){
    return y === x.split().reverse().join();
}
//compare input with reverse input
function palindromeTest(){
    const xVal = x.value.trim();
 if(x === y){
     alert('This is a palindrome!');
 } else{
     alert('This is not a palindrome!')
 }
}