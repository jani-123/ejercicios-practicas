function espacios (n)
{
  var s = "";
  for (var i = 0; i < n; i++)
   s += " ";
  return s;
}
function linea(n)
{
	if(n==1)
		return "*";
	else
	   return linea(n/3) + espacios(n/3) + linea(n/3)	
}
console.log(linea(9));