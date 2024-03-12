function printArray(arr) {
    for (let num of arr) {
        process.stdout.write(num + " ");
    }
    process.stdout.write("\n");
}

function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
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

                bubbleSort(arr);

                console.log("Array after sorting:");
                printArray(arr);
                rl.close();
            }
        });
    });
}

main();
