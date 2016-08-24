/*
  Write a function, deepEqual, that takes two values and returns true only if
  they are the same value or are objects with the same properties whose values
  are also equal when compared with a recursive call to deepEqual.

  To find out whether to compare two things by identity (use the === operator
  for that) or by looking at their properties, you can use the typeof operator.
  If it produces "object" for both values, you should do a deep comparison. But
  you have to take one silly exception into account: by a historical accident,
  typeof null also produces "object".
*/


// Not my original work, had to search on github for references, found this:
//https://gist.github.com/sawant/cc7e74cea98ef6c5ab2f from who I got a lot.
function deepEqual(obj1, obj2) {
  if(obj1 === obj2) return true;
  if( obj1 == null || typeof obj1 != "object" ||
     obj2 == null || typeof obj2 != "object" )
    return false;

  var propsObj1 = 0, propsObj2 = 0;

  for( var prop in obj1 )
    propsObj1++;

  for( var prop in obj2 ) {
    propsObj2++;
	// for the properties in obj2 if there are not in obj1 !(prop in obj1)
    // or if there
    if( !(prop in obj1) || !deepEqual( obj1[prop], obj2[prop] ) )
      return false;
  }

  return propsObj1 === propsObj2;
}
