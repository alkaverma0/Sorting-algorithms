def print_array(arr):
    for num in arr:
        print(num, end=" ")
    print()

def merge(arr, mid, low, high):
    i = low
    j = mid + 1
    k = low
    B = [0] * 100

    while i <= mid and j <= high:
        if arr[i] < arr[j]:
            B[k] = arr[i]
            i += 1
            k += 1
        else:
            B[k] = arr[j]
            j += 1
            k += 1

    while i <= mid:
        B[k] = arr[i]
        k += 1
        i += 1

    while j <= high:
        B[k] = arr[j]
        k += 1
        j += 1

    for i in range(low, high + 1):
        arr[i] = B[i]

def merge_sort(arr, low, high):
    if low < high:
        mid = (low + high) // 2
        merge_sort(arr, low, mid)
        merge_sort(arr, mid + 1, high)
        merge(arr, mid, low, high)

if __name__ == "__main__":
    n = int(input("Enter the number of elements: "))
    arr = []

    print("Enter the elements of the array:")
    for _ in range(n):
        element = int(input())
        arr.append(element)

    print("Array before sorting:")
    print_array(arr)

    merge_sort(arr, 0, n - 1)

    print("Array after sorting:")
    print_array(arr)
