function espacios (n)
{
  var s = "";
  for (var i = 0; i < n; i++)
   s += " ";
  return s;
}

function triangulo1(n)
{
  
  for (var i = 0; i < n; i++)
  {
    var e = espacios (2* n - i - 1);
    var s = '';
    
    for (var j = 1; j <= 2*i+1; j++)
    {
       s += '*';
    }
    
    console.log(e + s  );    
  }
}
function triangulo2(n) 
{ 
  
  for (var i = 0; i < n; i++)
  {
    var e = espacios (  n - i - 1);
    var s = '';
    for (var j = 1; j <= 2*i+1; j++)
      s += '*';
    console.log(e + s + e + e + s);    
  }
}
triangulo1(5)
triangulo2(5)
 