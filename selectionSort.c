#include<stdio.h>

void printArray(int *arr, int n)
{
    for (int i = 0; i<n; i++)
    {
        printf("%d ", arr[i]);
    }

    printf("\n");
}
void selectionSort(int *arr, int n)
{
    int indexofMin, temp;
    for(int i = 0; i<n-1; i++)
    {
        indexofMin = i;
        for(int j = i+1; j<n;j++)
        {
            if(arr[j] < arr[indexofMin])
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
    int n,i; 
    printf("Enter the number of elements: ");
    scanf("%d", &n);
    
    int arr[n];
    printf("Enter the elements of array: \n");
    for( int i = 0; i <n; i++)
    {

        scanf("%d", &arr[i]);
    }

    printArray(arr, n);
    selectionSort(arr, n);
    printArray(arr, n);
    return 0;


}