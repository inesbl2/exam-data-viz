function twoSum(array, target) {
    for (var firstElement = 0; firstElement < array.length; firstElement++) {
        for (var secondElement = firstElement + 1; secondElement < array.length; secondElement++) {
            if (array[firstElement] + array[secondElement] === target) {
                return [firstElement, secondElement];
            }
            
            
        }
    }
    return "None"
}

console.log(twoSum([2, 7, 11, 15], 9)); 
console.log(twoSum([3, 2, 4], 6)); 
console.log(twoSum([3, 3], 6)); 
console.log(twoSum([3, 2], 6)); 
