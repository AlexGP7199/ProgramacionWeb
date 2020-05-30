class FindDigits {
    howManyDigits(N){
        return N.toString().length;
    }
}

document.getElementById('addNum').addEventListener('submit',function(e){
    //Get values
    const N = document.getElementById('N').value;
    if( (N < 0) || ((N % 1) != 0)){
        alert("Solo aceptamos numeros enteros positivos");
    }else{
        const FD = new FindDigits();
        var count = FD.howManyDigits(N);
        alert(`El numero ingresado tiene ${count} digitos`);
    }
    e.preventDefault();
});