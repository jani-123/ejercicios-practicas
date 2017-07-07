function imprimirMatriz (M) {
  var n = M.length;
  for (var i = 0; i < n; i++) {
    console.log (M[i])  
  }  
} 

function crearMatriz (n, m){
  var M = [];
  for (var i = 0; i < n; i++) {
    M[i] = [];
    for (var j = 0; j < m; j++) {
      M[i][j] = 0;
    }    
  }
  return M;
}

function ejercicio4(n) {
  var M = crearMatriz (n, n) ;
  var num = 1;
  for (var i = 0; i < n; i++) {
    M[i][i] = num;
    num++;
  }
  num = n;
  for (var i = 0; i < n; i++) {
    M[i][n - i - 1] = num;
    num--;
  }
  
  imprimirMatriz(M);
}
//ejercicio4(5)
function ejercicio3_1 (n) {
  var m = 2 * n - 1;
  console.log(m);
  var M = crearMatriz (n, m) ;
  for (var i = 0; i < n; i++) {
    var j = n - i - 1;  
    console.log(j); 
    var num = 0;
    for  (var k = 0; k < i+1; k++ ) {
      num++;
      M[i][j + k] = num;   
    }
    num--;
    for  (var k = i+1; k < 2*i+1; k++ ) {
      M[i][j + k] = num;   
      num--;       
    }
  }
  imprimirMatriz(M);
}
ejercicio3_1(5)

function ejercicio3 (n) {
  var m = 2 * n - 1;
  var M = crearMatriz (n, m) ;
  for (var i = 0; i < n; i++) {
    var j = n - i - 1;
    var k = 0;
    var num = 1;
    var estaIncrementado = true;
    while ( k < 2*i+1 ) {
      M[i][j + k] = num;      
      if (estaIncrementado)
        num++;
      else 
        num--;
      
      if (num == i + 1)
        estaIncrementado = false;
      k++;
    }
  }
  imprimirMatriz(M);
}
