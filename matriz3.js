function matriz(n)
{
	var temp = [];
		for(var i=0; i < n; i++)
		{
			temp[i]=[];
			for(var j=0 ; j<n ; j++)
				temp[i][j]=0;
			//temp[i][n-i]=4;
			temp[i][n-i-1]=1;
		} 
	   
  console.log(temp);
}
matriz(5) 