function printArray(arr) {
    for (let num of arr) {
        process.stdout.write(num + " ");
    }
    console.log();
}

function merge(arr, mid, low, high) {
    let i = low;
    let j = mid + 1;
    let k = low;
    let B = [];

    while (i <= mid && j <= high) {
        if (arr[i] < arr[j]) {
            B[k] = arr[i];
            i++;
            k++;
        } else {
            B[k] = arr[j];
            j++;
            k++;
        }
    }

    while (i <= mid) {
        B[k] = arr[i];
        k++;
        i++;
    }

    while (j <= high) {
        B[k] = arr[j];
        k++;
        j++;
    }

    for (let i = low; i <= high; i++) {
        arr[i] = B[i];
    }
}

function mergeSort(arr, low, high) {
    if (low < high) {
        let mid = Math.floor((low + high) / 2);
        mergeSort(arr, low, mid);
        mergeSort(arr, mid + 1, high);
        merge(arr, mid, low, high);
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

                mergeSort(arr, 0, n - 1);

                console.log("Array after sorting:");
                printArray(arr);
                rl.close();
            }
        });
    });
}

main();
