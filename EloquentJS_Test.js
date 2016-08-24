var ancestry = require(../ancestry.js);

console.log(ancestry.reduce(function(min, cur) {
  if(cur.born < min.born)
    return cur;
  else
    return min;
}));
