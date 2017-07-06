var a = [[1,2,3],[1,2,3]];
var n = a.length;
var m = a[0].length;
	for(var i=0; i< m; i++)
	{
		var temp = [];
		for(var j=0 ; j<n ; j++)
			temp.push(a[j][i]);
		console.log(temp);
	} 
   
