function espacios (n)
{
  var s = "";
  for (var i = 0; i < n; i++)
   s += " ";
  return s;
}

function linea(n)
{
	var sp="";
	for (var i=0 ; i < n/3 ; i++)
	{
		
		sp += "*" ;
    }
    var  d=espacios(n/3);
	console.log(sp + d + sp);
}
linea(12)