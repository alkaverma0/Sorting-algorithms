def print_array(arr):
    for num in arr:
        print(num, end=" ")
    print()

def bubble_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        for j in range(n - 1 - i):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]

def main():
    n = int(input("Enter the number of elements: "))
    arr = []

    print("Enter the elements of the array:")
    for _ in range(n):
        element = int(input())
        arr.append(element)

    print("Array before sorting:")
    print_array(arr)

    bubble_sort(arr)

    print("Array after sorting:")
    print_array(arr)

if __name__ == "__main__":
    main()
