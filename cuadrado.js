function cuadrado(n)
{
	for (var i = 0; i < n; i++) 
    {
        var s = "";
        for(var j = n ; j <= i+j ; j--)
        {
        	s += "*";
        	console.log(s);    
        }            
        
    }
}
cuadrado(5)