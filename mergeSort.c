#include<stdio.h>

void printArray(int *arr, int n)
{
    for (int i = 0; i<n; i++)
    {
        printf("%d ", arr[i]);
    }

    printf("\n");
}
void merge(int arr[], int mid,int low,int high)
{
    int i,j, k, B[100];
    i = low;
    j = mid + 1;
    k = low;

    while (i <=mid && j <= high)
    {
      if (arr[i] < arr[j])
      {
        B[k] = arr[i];
        i++;
        k++;

      }
      else
      {
        B[k] = arr[j];
        j++;
        k++;

      }

    }
    while(i<= mid)
    {
        B[k] = arr[i];
        k++;
        i++;
    }

    while(j <=high)
    {
        B[k] = arr[j];
        k++;
        j++;
    }
    for(int i=low; i<=high; i++)
    {
        arr[i] = B[i];
    }

}

    void mergeSort(int arr[], int low, int high)
    {
        int mid;
        if(low<high)

        {
            mid = (low + high)/2;
            mergeSort(arr, low, mid);
            mergeSort(arr, mid + 1, high);
            merge(arr, mid, low, high);
        }
    }



int main()
{
    int n,i; 
    printf("Enter the number of elements: ");
    scanf("%d", &n);

    int arr[n];
    printf("Enter the elements of array");
    for( int i = 0; i <n; i++)
    {

        scanf("%d", &arr[i]);
    }

    printArray(arr, n);
    mergeSort(arr,0 ,n) ;
    printArray(arr, n);
    return 0;


}