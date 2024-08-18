'use strict'


// Task1 

let fruits = [ "apple", "mango", "avocado", "kiwi"];

fruits.splice(-2,1,"strawberry");

console.log(fruits);




// Task2

let info = "good day" ;

let newInfo = info.slice(2);

console.log(newInfo);





// Task3 

function getString(str) {
    return str.length;
}

// ეს ვერ გავიგე კარგად :(







// Task4

let numbers = [5, 25, 89, 120, 36];

numbers.push("javascript", "python");
numbers.unshift("html", "css");

console.log( numbers.length);

numbers.shift();
numbers.pop();

console.log(numbers);



// Task5 

let fruits1 = ["orange", "banana", "kiwi"];

console.log(fruits1.length);

fruits1.push("apple", "pineapple");
fruits1.unshift("watermelon");

console.log(fruits1.length);

fruits1.splice(2, 0, "mango");
fruits1.shift();
fruits1.pop();

console.log(fruits1.length);




// Task6 

let array3 =[1, 2, 3, 4, 5];

array3.splice(3, 0, 'a', 'b', 'c');

console.log(array3);



// Task7 

let array7 =  [15, 100, 25, 10, 36];

array7.splice(3,1);

console.log(array7);




// Task8

let array8 = [ 1, 2 , 3 , 4, 5];

array8.splice(2,1, "three");

console.log(array8);
