function pintarlinea(n)
{
	var s = "";
	for (var i = 0; i < n; i++)
	   s += "*";
	return s;
}
function linea2(n)
{
	var t=4;
	var sp="";
	for (var i=0 ; i <= t ; i++)
	{
		var e = pintarlinea(n)
		n = n/3;
		
		console.log(e);
    }
    
	
}
linea2(81)