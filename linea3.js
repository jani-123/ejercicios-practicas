function espacios (n)
{
  var s = "";
  for (var i = 0; i < n; i++)
   s += " ";
  return s;
}

function pintarLinea(n)
{
	var s = "";
	for (var i = 0; i < n; i++)
	   s += "*";
	return s;
}

function linea1(t,n)
{
    
	for(var k=0 ; k <= t ; k++)
	{
		var e = pintarLinea(n)
		var s = espacios(n);
		var d = pintarLinea(n);
		console.log(e +  s + d);
		n=n / 3;
        
	}
	/*var i = 0;
  while (i <= t) {
    var s1 = pintarLinea(n);
    var e = espacios(n);
    var s2 = pintarLinea(n);
    console.log (s1 + e + s2);
    n = n / 3;
    i = i + 1;
  }*/
	
}


linea1(4,81)


