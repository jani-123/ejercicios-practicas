function matriz(n)
{
	var temp = [];
		for(var i=0; i < n; i++)
		{
			temp[i]=[];
			for(var j=n-1 ; j>=0 ; j--)
				temp[i][j]=j+1;
               

			temp[i][n-i-1]=n;
		} 
	   
  console.log(temp);
}
matriz(5)