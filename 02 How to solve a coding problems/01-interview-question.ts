// given two arrays array1 and array2 of strings create a function that check if exists a string of array1 in array2


// 1 Brute force solution

function contains1(arr1: string[], arr2: string[]): boolean {

    for (let i:number=0; i < arr1.length; i++){
        for (let j: number=0; j < arr2.length; j++) {
            if (arr1[i]===arr2[j]) {
                return true;
            }
        }
    }

    return false;
}

const array1: string[] = ['a', 's', 'c', 'w'];
const array2: string[] = ['x', 'y', 'w'];

console.log(contains1(array1, array2));

function contains2(arr1: string[], arr2: string[]): boolean {
    let elements: {[key: string]: boolean} = {};
    let item: string;
    for (let i:number=0; i < arr1.length; i++){
        item = arr1[i];
        if(!elements[item]) {
            elements[item] = true;
        }
    }
    for (let j: number = 0; j < arr2.length; j++ ) {
        item = arr2[j]
        if (elements[item]) {
            return true
        }
    }
    return false;
}
console.log(contains2(array1, array2));

