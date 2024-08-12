// Given one array of integer and number look in the array if it exists two integer that they sum up to the given number:

// Solution 1: Brut force:
function checkForSum1 (array: number[], s: number): boolean {
    let theSum: number;
    for (let i: number = 0; i < array.length - 1; i++) {
        for (let j: number = i+1; j < array.length; j++) {
            theSum = array[i] + array[j];
            if (theSum === s) {
                return true;
            }
        }
    }
    return false;
} // o(n^2)

// Lets assume that the array is sorted:
// Solution 2: binary searching for the complement:
function binarySearch (i: number, array: number[], x: number): number {
    let low: number = i;
    let high: number = array.length;
    let mid: number;

    while (high >= low) {
        mid = low + Math.floor((high - low)/2);

        if (array[mid] === x) {
            return mid;
        } else if (array[mid] > x) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return -1;
} // o(log(n))

function checkForSum2 (array: number[], s: number): boolean {
    let theComplement: number;
    let searchResult: number;

    for (let i: number = 0; i < array.length-1; i++) {
        theComplement = s - array[i]
        searchResult = binarySearch(i+1, array, theComplement);

        if (searchResult != -1) {
            return true
        }
    }
    return false;
}// o(n*log(n))

// Solution 3: Scanning the array.
function checkForSum3 (array: number[], s: number): boolean {
    let theSum: number;
    let i: number = 0;
    let j: number = array.length - 1;

    while (i < j) {
        theSum = array[i] + array[j];
        if (theSum === s) {
            return true;
        } else if (theSum < s) {
            i = i + 1;
        } else if (theSum > s) {
            j = j - 1;
        }
    }
    return false;
} // o(n)

// Lets assume that the list isn't sorted
//Solution 4: Using hashset to store the complement.
function checkForSum4 (array: number[], s: number): boolean {
    let complements = new Set();
    let complement: number;

    for (let i: number = 0; i < array.length; i++) {
        if (complements.has(array[i])) {
            return true;
        }
        complement = s - array[i];
        complements.add(complement);
    }
    return false;
}// o(n) (Using the hash set the lookup is o(1))

let arr1: number[] = [1, 2, 3, 9];
let arr2: number[] = [1, 2, 4, 4];
let s: number = 8;

console.log('Solution 1: Brut Force.');
console.log(checkForSum1(arr1, s));
console.log(checkForSum1(arr2, s));

console.log('\nSolution 2: Binary searching for the complement.');
console.log(checkForSum2(arr1, s));
console.log(checkForSum2(arr2, s));

console.log('\nSolution 3: Scanning the array.');
console.log(checkForSum3(arr1, s));
console.log(checkForSum3(arr2, s));

console.log('\nSolution 4: Using hash set to store the complement.');
console.log(checkForSum4(arr1, s));
console.log(checkForSum4(arr2, s));