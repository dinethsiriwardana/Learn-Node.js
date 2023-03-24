const _ = require('lodash'); 
//? lodash fill method will fill the array with the value from the start index to the end index.
//? if the end index is not provided,  
        //? it will fill the array from the start index to the end of the array.
//? if the start index is not provided,    
        //? it will fill the array from the beginning of the array to the end index.
//? if the start and end index is not provided, 
        //? it will fill the array with the value.


let example = _.fill([1, 2, 3, 4, 5], 'banana', 1, 4); //? _.fill(array, value, start, end) 


console.log(example); //? [1, "banana", "banana", "banana", 5]
