function merge_sorted_arrays(arr1: number[], arr2: number[]): number[] {
    let merged_arrays: number[] = [];

    if(arr1.length == 0) return arr2;
    if(arr2.length == 0) return arr1;

    let item_arr1: number = arr1[0];
    let item_arr2: number = arr2[0];

    let i: number = 1;
    let j: number = 1;
    let k: number = 1;
    
    while( item_arr1 || item_arr2) {
        console.log(`Iteration ${k}`);
        console.log(`Item1 ${item_arr1}`);
        console.log(`Item2 ${item_arr2}`);

        if(!item_arr2 || item_arr1 < item_arr2) {
            merged_arrays.push(item_arr1);
            item_arr1 = arr1[i];
            i++;
        } else {
            merged_arrays.push(item_arr2);
            item_arr2 = arr2[j];
            j++;
        }
        console.log(`Merged Arrays ${merged_arrays}`);
        k++;
    }

    return merged_arrays;
}

let arr1: number[] = [0, 3, 4, 31];
let arr2: number[] = [4, 6, 30]; 

console.log(merge_sorted_arrays(arr1, arr2));