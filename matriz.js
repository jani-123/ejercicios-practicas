function matriz(a,b)
{
	var c = [ [] , [] ];
	for(var i=0; i<a.length; i++)
	{
		for(var j=0 ; j<a[i].length ; j++)
			c[i][j]= a[i][j] + b[i][j];
	} 
   console.log(c);
}
matriz([ [1,1,1] , [2,2,2] ],[ [3,3,3] , [2,2,2] ])
