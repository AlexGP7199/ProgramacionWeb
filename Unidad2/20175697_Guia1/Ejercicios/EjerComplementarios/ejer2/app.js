class Geometria{
    trianguleType(L1,L2,L3){
        var tipo;
        if ( L1 == L2 && L1 == L3 && L3 == L2 ) {
            tipo = "equilatero";
        }
        else{
            if ( L1 == L2 || L2 == L3 || L3 == L1){
                tipo = "isoceles";
            }else{
                tipo = "escaleno";
            }
        }
        return tipo;
    }

    CantidadT(tipo){
        var num = 0;
        num = parseInt(num);
        var i = Ingresados.length;
        var z;
        z = parseInt(z);
        for (z = 0; z <= i; z++){
            if ( tipo == Ingresados[z]){
                num++;
            }
        }

        return num;
    }
    MenorCT(cEQ,cIso,cEsc){
        if ((cEQ <= cIso) && (cEQ <= cEsc)){
            return "equilatero";
        }else{
            if ((cISO <= cEQ) && (cISO <= cEsc)){
                return "isoceles";
            }else{
                return "escaleno";
            }
        }
    
    }
}

var Ingresados = [];
var cEQ, cISO, cEsc;
cEQ = parseInt(cEQ);
cISO = parseInt(cISO);
cEsc = parseInt(cEsc);

document.getElementById('addInfo').addEventListener('submit',function(e){
    const geo = new Geometria();
    var L1 = document.getElementById('L1').value,
        L2 = document.getElementById('L2').value,
        L3 = document.getElementById('L3').value;
    L1 = parseInt(L1);
    L2 = parseInt(L2);
    L3 = parseInt(L3);
    var tipo = geo.trianguleType(L1,L2,L3);
    Ingresados.push(tipo);
    cEQ = geo.CantidadT("equilatero");
    cISO = geo.CantidadT("isoceles");
    cEsc = geo.CantidadT("escaleno");
    var menor = geo.MenorCT(cEQ,cISO,cEsc);

    alert(`Usted tiene ${cEQ} equilateros, ${cEsc} escalenos, ${cISO} isoceles`);
    alert(`El menor de los ingresados fue ${menor}`);
    e.preventDefault();

});
