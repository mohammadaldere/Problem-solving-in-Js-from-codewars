/*Given a random non-negative number,
 you have to return the digits of this number within an array in reverse order.*/

 //convert the number to string 
 //convert the string to array of string
 //convert the array element to number
 //reverse the array element
 function digitize(n) {
    if(n>0){
    return n.toString().
    split("").
    map((n)=>Number(n)).
    reverse()
    
  }
}

  console.log(digitize(-200))