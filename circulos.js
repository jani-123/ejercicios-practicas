function quiz4 (r) {

  var x = 0;
  var circulo = [];
  var espacios = [];
  while (x <= r) 
  {   
      var y = Math.sqrt ( r * r - x*x);
      x++;
      var j = 0;
      var str = "";

        while ( j <= y)
        {
          str += "**";
          j++;
        }

        var e = "";

        for (var i = 0; i <= r - y; i++)
        {
           e += "  ";
        }
      //console.log (x +  ', '+  y);
      //console.log (str);
      circulo.push(str);
      espacios.push (e);
  }

  for (var i = espacios.length -1; i >=0 ; i--) 
  {
    console.log (espacios[i] + circulo[i] + circulo[i] );
  }
  for (var i = 0; i < circulo.length; i++)
  {
    console.log (espacios[i] + circulo[i] + circulo[i] );
  }
}
quiz4(10)