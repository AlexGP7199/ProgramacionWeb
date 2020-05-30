class FindNumbers {
    findMayor(N1,N2,N3,mayor){
        if( (N1>N2) && (N1>N3)){
            mayor = N1;
        }
        else {
            if ((N2>N1) && (N2>N3)){
                mayor = N2;
            }
            else{
                mayor = N3;
            }
        }
        return mayor;
    }
    findMenor(N1,N2,N3,menor){
        if( (N1<N2) && (N1<N3)){
            menor = N1;
        }
        else {
            if ((N2<N1) && (N2<N3)){
                menor = N2;
            }
            else{
                menor = N3;
            }
        }
        return menor;
    }

}

class UI{
    /*
    showAlert(msg,classname){
        // Create div
        const div = document.createElement('div');
        // Add Classes
        div.classname = `alert ${classname}`;
        // Add text
        div.appendChild(document.createTextNode(msg));
        // Get parent
        const container = document.querySelector('.container');
        //Get form
        const form = document.querySelector('#ADD-NUMS');
        // Insert alert
        container.insertBefore(div,form);
        
        // Timeout after 3 sec
        setTimeout(function(){
            document.querySelector('.alert').remove();
        },3000);
    }*/

    clearFields(){
        document.getElementById('N1').value='';
        document.getElementById('N2').value='';
        document.getElementById('N3').value='';
    }
}
   

document.getElementById('ADD-NUMS').addEventListener('submit',function(e){

    // Get form values
    const N1 = document.getElementById('N1').value,
    N2 = document.getElementById('N2').value,
    N3 = document.getElementById('N3').value;
    var mayor, menor;
    const FNS = new FindNumbers();
    const ui = new UI();
    if((N1 == N2 || N1 == N3 || N3 == N2) || (N1 < 0 || N2 < 0 || N3 < 0)){
        //ui.showAlert('Los numeros no pueden iguales o negativos','error');
        alert('Los numeros no pueden iguales o negativos');
    }else{
        mayor = FNS.findMayor(N1,N2,N3,mayor);
        menor = FNS.findMenor(N1,N2,N3,menor);
        //ui.showAlert(`El mayor es ${mayor} y el menor es ${menor}`,'success');
        alert(`El mayor es ${mayor} y el menor es ${menor}`);
        ui.clearFields();
    }

    e.preventDefault();
});