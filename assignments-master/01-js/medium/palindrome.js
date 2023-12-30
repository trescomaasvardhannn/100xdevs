/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str=str.toLowerCase();

    let a1=str.split("");
   a1= a1.filter(item => item>='a' && item<='z')
    str= a1.join("");
    a1= a1.reverse();

    let str2=a1.join("");

    return str2==str
}

module.exports = isPalindrome;
