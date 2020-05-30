class Calcular{

    suma(N1,N2){
        var result = N1+ N2;

        return result;
    }
    resta(N1,N2){
        var result = N1 - N2;
        return result;
    }
    producto(N1,N2){
        var result = N1 * N2;
        return result;
    }
    division(N1,N2){
        var result = N2 / N1;
        return result;
    }
}

document.getElementById('ADD-nums').addEventListener('submit',function(e){

    const N1 = document.getElementById('N1').value,
          N2 = document.getElementById('N2').value;
    var N1P = parseInt(N1);
    var N2P = parseInt(N2);
    var R1,R2;

    const CN = new Calcular();
    if (N1P > N2P){
        R1 = CN.suma(N1P,N2P);
        R2 = CN.resta(N1P,N2P);
        alert(`Los resultados son ${R1} y ${R2}`);
    }
    else{
        if ( N1P < N2P ){
            R1 = CN.producto(N1P,N2P);
            R2 = CN.division(N1P,N2P);
            alert(`Los resultados son ${R1} y ${R2}`);
        }else{
            alert('Ingrese numeros o trato que no sean iguales');
        }
    }
    e.preventDefault();
});