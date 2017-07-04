function quiz4 (r) {
  var x = 0;// declaro x en cero
  var circulo =[]; // declaro un array vacio
  while (x <= r) // condicional 
  {   
      var y = Math.sqrt ( r * r - x*x); // raiz cuadrada del circulo
      x++; // incremento
      var j = 0;
      var str = "";// creo un string vacio
        while ( j <= y) //concicional
        {
          str += "**";// lleno mi estring con dos ** 
          j++; // incremento
        } 
      //console.log (x +  ', '+  y);
      //console.log(str);
      circulo.push(str);// añado elementos a mi array vacio
      
  }

  for (var i = circulo.length - 1 ; i >= 0 ; i--) // recorre desde el largo del array hasta cero
  {
     console.log(circulo[i]);// muestra los elementos del areglo
  }

  for(var i = 0 ; i < circulo.length ; i++)//recorre de 0 hasta la longitud del array
  {
     console.log(circulo[i]);// muestra elemento del areglo
  }
}
quiz4(7)