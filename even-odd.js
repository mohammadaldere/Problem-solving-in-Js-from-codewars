/*Create a function that takes an integer as an argument and returns "Even" for even numbers
 or "Odd" for odd numbers.*/

function even_odd(number){
    return number%2==0 ? "even" : "odd" 
}

console.log(even_odd(3))