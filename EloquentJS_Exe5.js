/*
  We’ve seen that % (the remainder operator) can be used to test whether a
  number is even or odd by using % 2 to check whether it’s divisible by two.
  Here’s another way to define whether a positive whole number is even or odd:
  * Zero is even.
  * One is odd.
  * or any other number N, its evenness is the same as N - 2.
  Define a recursive function isEven corresponding to this description.
  The function should accept a number parameter and return a Boolean.
*/

function isEven(n) {
  	n = Number(Math.abs(n));
   if (isNaN(n))
      return false;
    if (n === 0)
      return true;
    else if (n === 1)
      return false;
    else
    // Note to self, the function return shuld be the recursive call, anything
    // else won't work (took me too long to realize this).
      return isEven(n -= 2);
}
