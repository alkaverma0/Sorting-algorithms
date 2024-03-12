import java.util.*;

public class mergeSort {
    public static void printArray(int[] arr) {
        for (int num : arr) {
            System.out.print(num + " ");
        }
        System.out.println();
    }

    public static void merge(int arr[], int mid, int low, int high) {
        int i, j, k;
        i = low;
        j = mid + 1;
        k = low;
        Map<Integer, Integer> B = new HashMap<>();

        while (i <= mid && j <= high) {
            if (arr[i] < arr[j]) {
                B.put(k, arr[i]);
                i++;
                k++;
            } else {
                B.put(k, arr[j]);
                j++;
                k++;
            }
        }

        while (i <= mid) {
            B.put(k, arr[i]);
            k++;
            i++;
        }

        while (j <= high) {
            B.put(k, arr[j]);
            k++;
            j++;
        }

        for (int idx = low; idx <= high; idx++) {
            arr[idx] = B.get(idx);
        }
    }

    public static void mergeSort(int arr[], int low, int high) {
        if (low < high) {
            int mid = (low + high) / 2;
            mergeSort(arr, low, mid);
            mergeSort(arr, mid + 1, high);
            merge(arr, mid, low, high);
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the number of elements: ");
        int n = scanner.nextInt();
        int[] arr = new int[n];

        System.out.println("Enter the elements of the array:");
        for (int i = 0; i < n; i++) {
            arr[i] = scanner.nextInt();
        }

        System.out.println("Array before sorting:");
        printArray(arr);

        mergeSort(arr, 0, n - 1);

        System.out.println("Array after sorting:");
        printArray(arr);

        scanner.close();
    }
}
