class Diccionario {
    palabrasDisponibles(wordL){
        switch(wordL){
            case 'casa': 
                alert('En ingles se dice House');
                break;
            case 'mesa':
                alert('En ingles se dice desk');
                break;
            case 'perro':
                alert('En ingles se dice dog');
                break;
            case 'gato':
                alert('En ingles se dice cat');
                break;
            default:
                alert('Ingrese una de las palabras mostradas');
        }
    }

    clearFields(){
        document.getElementById('word').value = '';
    }
}

document.getElementById('addWords').addEventListener('submit',function(e){

    const word = document.getElementById('word').value;
    var wordL = word.toLowerCase();
    const dc = new Diccionario();
    
    dc.palabrasDisponibles(wordL);
    dc.clearFields();

    e.preventDefault();
})