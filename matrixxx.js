//var cero = 0;
var arr=[];
//var subarr=[];
//var n= prompt("Ingrese un valor n");
//var num = parseInt(n);
//llenar();

function crearMatriz(num){
    for (i=0; i<num; i++){
        arr[i]=[];
        for(var j=0;j<num; j++){
            arr[i][j] =0;
        }
         arr[i][num-i-1] = num; //Esta linea resume la función llenar;
         for(j=0; j<n-i-1; j++){
            arreglo[i][j] = j+1;
        }
    }
    console.log(arr);
    return arr;
}

/*
function llenar(){
    var arreglo = crearMatriz();
    for (i=0; i<arreglo.length; i++){
        for(j=0; j<n-i-1; j++){
            arreglo[i][j] = j+1;
        }
    }


    console.log(arreglo);
}*/
crearMatriz(5)