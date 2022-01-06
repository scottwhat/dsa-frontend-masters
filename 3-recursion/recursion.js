// recursive function to find the sum of nested loops 
// if the current item is an array, recursive call of the functions enters to sum that array, return it and move to next element 
  

function nestedAdd(array) {
    let sum = 0; 
    for(let i = 0; i < array.length; i++) {

        const current = array[i];
        if(Array.isArray(current)) {
            sum += nestedAdd(current);
        }

        else {
            sum += current;
        }
    }
    return sum; 
}

nestedAdd([1, 2, 3]);
nestedAdd([[[[[[[[[5]]]]]]]]]);
nestedAdd([10, [12, 14, [1], [16, [20]]], 10, 11]);
  