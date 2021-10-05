let word = document.getElementById('input').value;
const btn = document.querySelector('#btn')


//compare input with reverse input
function palindromeTest(){
    // word.split('')
    for(let i = 0; i < word.length; i++){
        if(word[i] === word[word.length - 1 - i]){
            console.log("Its a palindrome!")
            alert("Its a palindrome!")
        }else if(word[i] !== word[word.length - 1 - i]){
            console.log('Its not a palindrome')
            alert('Its not a palindrome')
        }
 }
}

btn.addEventListener('click', palindromeTest)
