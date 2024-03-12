def print_array(arr):
    for num in arr:
        print(num, end=" ")
    print()

def selection_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        index_of_min = i
        for j in range(i + 1, n):
            if arr[j] < arr[index_of_min]:
                index_of_min = j

        arr[i], arr[index_of_min] = arr[index_of_min], arr[i]

if __name__ == "__main__":
    n = int(input("Enter the number of elements: "))
    arr = []

    print("Enter the elements of the array:")
    for _ in range(n):
        element = int(input())
        arr.append(element)

    print("Array before sorting:")
    print_array(arr)

    selection_sort(arr)

    print("Array after sorting:")
    print_array(arr)
