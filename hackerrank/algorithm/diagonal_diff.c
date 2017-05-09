#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int main() {

    /* Enter your code here. Read input from STDIN. Print output to STDOUT */   
    
	int n,i,j,k=0,sum1=0,sum2=0,sum;
		scanf("%d",&n);
    int a[n][n]; 
	k=n-1;
	
	for(i=0;i<n;i++)
	{
		for(j=0;j<n;j++)
		{
			scanf("%d",&a[i][j]);
		}
	}
	for(i=0;i<n;i++)
	{
		sum1+=a[i][i];
		sum2+=a[i][k];
		k--;
	}
	sum=abs(sum1-sum2);
	printf("%d",sum);
    return 0;
}
