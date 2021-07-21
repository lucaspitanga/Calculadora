function somar(){

    var primeiroElementoDaSoma = 0; // string
    var segundoElementoDaSoma = 0; //integer // decimal (0)

    primeiroElementoDaSoma = document.getElementById("A").value; //pode ser colocado junto - primeiroElementoDaSoma = parseInt (document.getElementById("A").value);
    segundoElementoDaSoma = document.getElementById("B").value;

    //parseFloat converte decimais e números quebrados (1,5), enquanto o parseInt apenas inteiros.

    // A ==> parseInt(...) ==> A = número1
    primeiroElementoDaSoma = parseFloat(primeiroElementoDaSoma);
    // B ==> parseInt(...) ==> B = número2
    segundoElementoDaSoma = parseFloat(segundoElementoDaSoma);

    alert (primeiroElementoDaSoma + segundoElementoDaSoma);

}

function diminuir(){

    var primeiroElementoDiminuir = 0;
    var segundoElementoDiminuir = 0;

    primeiroElementoDiminuir = parseFloat (document.getElementById("A").value);
    segundoElementoDiminuir = parseFloat (document.getElementById("B").value);

    alert (primeiroElementoDiminuir - segundoElementoDiminuir)

}

function dividir(){

    var primeiroElementoDividir = 0;
    var segundoElementoDividir = 0;

    primeiroElementoDividir = parseFloat (document.getElementById("A").value);
    segundoElementoDividir = parseFloat (document.getElementById("B").value);

    alert (primeiroElementoDividir / segundoElementoDividir)
    
}

function multiplicar(){

    var primeiroElementoMultiplicar = 0;
    var segundoElementoMultiplicar = 0;

    primeiroElementoMultiplicar = parseFloat (document.getElementById("A").value);
    segundoElementoMultiplicar = parseFloat (document.getElementById("B").value);

    alert (primeiroElementoMultiplicar * segundoElementoMultiplicar)
    
}

function numero1(event){
    var x = event.keyCode;

    if (
        (x==42) || (x==43) || (x==44) || (x==45) || (x==46) || (x==47) || 
        (x==48) || (x==49) || (x==50) || (x==51) || (x==52) || (x==53) ||
        (x==54) || (x==55) || (x==56) || (x==57)
        ){
    return true
    } else return event.preventDefault();

   // document.getElementById('K').innerHTML = x;

    //console.log('Tecla pressionada = ' + x)
}

// var chovendo ='';
// if ((0==0) && ou AND (1==1)) { -> se um estiver/for falso não vai funcionar
//    alert("zero é igual a zero");
//}

// == (igual) != (diferente) > (maior) < (menor) = (receber)

//if (0==1) {
//    alert("zero é igual a um" + chovendo + ' ');
//} else {
//    alert("zero não é igual a um"); 
//}


