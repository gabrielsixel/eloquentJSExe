var fizzBuzz = function() {
  var num = 0;
  while (num < 100) {
  num++;
  //For each iteraction initialize a new empty string.
  var string = '';
  if(num % 3 == 0) {
    string += "Fizz";
  }
  if(num % 5 == 0){
    string += "Buzz";
  }
  if (string === ''){
    string += num
  }
    console.log(string);
  }
};
