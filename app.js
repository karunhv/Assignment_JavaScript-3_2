function findSum()
{
  var count = 0;
  var sum = 0;
  for(count = 0; count < arguments.length; count++)
  {
    sum = sum + arguments[count];
  }
  return sum;
}

console.log("Sum : " + findSum(1,2,3));
console.log("Sum : " + findSum(1,2,3,4,5,6,7,8,9,10));
