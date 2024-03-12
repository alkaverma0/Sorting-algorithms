#include <iostream>

void printArray(int *arr, int n)
{
    for (int i = 0; i < n; i++)
    {
        std::cout << arr[i] << " ";
    }
    std::cout << std::endl;
}

void selectionSort(int *arr, int n)
{
    int indexofMin, temp;
    for (int i = 0; i < n - 1; i++)
    {
        indexofMin = i;
        for (int j = i + 1; j < n; j++)
        {
            if (arr[j] < arr[indexofMin])
            {
                indexofMin = j;
            }
        }

        temp = arr[i];
        arr[i] = arr[indexofMin];
        arr[indexofMin] = temp;
    }
}

int main()
{
    int n, i;
    std::cout << "Enter the number of elements: ";
    std::cin >> n;

    int arr[n];
    std::cout << "Enter the elements of array:" << std::endl;
    for (int i = 0; i < n; i++)
    {
        std::cin >> arr[i];
    }

    printArray(arr, n);
    selectionSort(arr, n);
    printArray(arr, n);
    return 0;
}
