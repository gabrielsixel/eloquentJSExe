var rigthAngleTriange = function(num) {
  var txt = "#";
  //To be able to create the exact number of lines that are requested by the function
  // the num variable is added with 1
  while(txt.length != (num + 1)) {
   console.log(txt);
   txt += "#";
  }
};
