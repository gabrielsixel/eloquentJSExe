/*
  Write a loop that makes seven calls to console.log to output the following triangle:
  #
  ##
  ###
  ####
  #####
  ######
  #######
  It may be useful to know that you can find the length of a string by writing .length after it.
  var abc = "abc";
  console.log(abc.length);
  // → 3
  Most exercises contain a piece of code that you can modify to solve the exercise. Remember that you can click code blocks to edit them.
*/
function rigthAngleTriange(num) {
  var txt = "#";
  //To be able to create the exact number of lines that are requested by the function
  // the num variable is added with 1
  while(txt.length != (num + 1)) {
   console.log(txt);
   txt += "#";
  }
}
