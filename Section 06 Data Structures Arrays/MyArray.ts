class MyArray {
    // Attributes
    length: number;
    data: {[index: number]: any};
    
    // Methods
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index: number): any {
        return this.data[index];
    }

    push(item: any): number {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop(): any {
        const item: any = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return item;
    }

    shift(index: number): void {
        for (let i: number = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
    }

    delete(index: number): any {
        const item: any = this.data[index];

        this.shift(index);
        this.pop();
        
        return item;
    }

    insert(item: any, index: number): void {
        for (let i: number = this.length; i > index; i--) {
            this.data[i] = this.data[i - 1];
        }
        this.data[index] = item;
        this.length++;
    }
}

let myArray = new MyArray();

myArray.push('Hi');
myArray.push('you');
myArray.push(',');
myArray.push('This');
myArray.push('is');
myArray.push('me');
myArray.push('!!');

console.log(myArray);
console.log(myArray.get(0));
console.log(myArray.pop());
console.log(myArray);
console.log(myArray.delete(2));
console.log(myArray);
console.log(myArray.insert('!!!! ', 2));
console.log(myArray);