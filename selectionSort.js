function printArray(arr) {
    for (let num of arr) {
        process.stdout.write(num + " ");
    }
    console.log();
}

function selectionSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let indexOfMin = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[indexOfMin]) {
                indexOfMin = j;
            }
        }

        let temp = arr[i];
        arr[i] = arr[indexOfMin];
        arr[indexOfMin] = temp;
    }
}

function main() {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Enter the number of elements: ", (n) => {
        let arr = [];

        console.log("Enter the elements of the array:");
        rl.on('line', (input) => {
            arr.push(parseInt(input));
            if (arr.length === parseInt(n)) {
                console.log("Array before sorting:");
                printArray(arr);

                selectionSort(arr);

                console.log("Array after sorting:");
                printArray(arr);
                rl.close();
            }
        });
    });
}

main();
