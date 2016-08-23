/*
  Write a function countBs that takes a string as its only argument and returns
  a number that indicates how many uppercase “B” characters are in the string.
  Next, write a function called countChar that behaves like countBs, except it
  takes a second argument that indicates the character that is to be counted
  (rather than counting only uppercase “B” characters).
  Rewrite countBs to make use of this new function.
*/

function countBs(string) {
  return countChar(string, "B");
}

function countChar(string, char) {
  var counts = 0;
  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) == char)
      counts++;
  }
  return counts;
}
