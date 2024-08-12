const nemo: string[] = ['hani', 'whatever', 'nemo'];

function findNemo(array: string[]) : undefined{
    let t0: number = performance.now()
    for (let i : number = 0; i < array.length; i++) {
        if (array[i] === 'nemo') {
            console.log('Found NEMO!!!!!!');
        }
    }
    let t1: number = performance.now()
    console.log(t1 - t0)
}

findNemo(nemo);