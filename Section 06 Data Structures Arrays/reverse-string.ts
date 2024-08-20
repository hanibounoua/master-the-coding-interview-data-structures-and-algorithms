function reverse_string(str: string): string {
    
    let reversed_string: string;
    let char_list: string[];
    let temp_char: string;

    char_list = str.split('');

    let i: number = 0;
    let j: number = char_list.length-1;

    while(i < j) {

        temp_char = char_list[i];
        char_list[i] = char_list[j];
        char_list[j] = temp_char;

        i++;
        j--;
    }

    reversed_string = char_list.join('');

    return reversed_string;
}

console.log(reverse_string('hani bounoua'));