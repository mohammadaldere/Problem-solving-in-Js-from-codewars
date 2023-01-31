/*
Sum all the numbers of a given array ( cq. list ), 
except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, 
even if there are more than one with the same value.Mind the input validation.

If an empty value ( null, None, Nothing etc. ) is given instead of an array,
or the given array is an empty list 
or a list with only 1 element, return 0.

*/

// check if empty valuereturn zero 
//find the highest number
//find the lowest number
//filter the array
//sum all numbers in the array

function sumArray(array) {
  if(array==null) return 0 ;
  return array.sort((a,b)=>a-b).slice(1,-1).reduce((acc,curr)=> acc+curr,0)
 
//   return array.filter(function(x){
//    return x !== Math.max(...array) && x !== Math.min(...array)
//   }).reduce(function(acc,curr){
//     return acc+curr
// },0)

}
console.log(sumArray([1,3,4,8,9]));