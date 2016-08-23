/*
  Write a program that uses console.log to print all the numbers from 1 to 100,
  with two exceptions. For numbers divisible by 3, print "Fizz" instead of the
  number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

  When you have that working, modify your program to print "FizzBuzz", for
  numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz"
  for numbers divisible by only one of those).
*/

var fizzBuzz = function(number) {
  var num = 0;
  if (number == undefined)
    number = 100;
  while (num < number) {
  num++;
  //For each iteraction initialize a new empty string.
  var string = '';
  if(num % 3 === 0) {
    string += "Fizz";
  }
  if(num % 5 === 0){
    string += "Buzz";
  }
  if (string === ''){
    string += num;
  }
    console.log(string);
  }
};
