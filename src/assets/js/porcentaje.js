let numero = document.getElementById("numero"),
    numero1 = document.getElementById("numero1"),
    numero2 = document.getElementById("numero2"),
    numero3 = document.getElementById("numero3"),
    numero4 = document.getElementById("numero4"),
    numero5 = document.getElementById("numero5"),
    numero6 = document.getElementById("numero6"),
    numero7 = document.getElementById("numero7");

let porce = document.querySelector(".circulo"),
    porce1 = document.querySelector(".circulo1"),
    porce2 = document.querySelector(".circulo2"),
    porce3 = document.querySelector(".circulo3"),
    porce4 = document.querySelector(".circulo4"),
    porce5 = document.querySelector(".circulo5"),
    porce6 = document.querySelector(".circulo6"),
    porce7 = document.querySelector(".circulo7");

let contador = 0,
    contador1 = 0,
    contador2 = 0,
    contador3 = 0,
    contador4 = 0,
    contador5 = 0,
    contador6 = 0,
    contador7 = 0;

let contenedor = document.querySelector(".graficas-contenedor");
contenedor.addEventListener('click', animacion);

function animacion(e) {
    var tgt = e.target;

    if (tgt.getAttribute('id') == 'html'){
        tgt.classList.add('abajo');
        numero.classList.add('abajo');
        porce.classList.add('play');
        setInterval(() => {
            if(contador == 90){
                clearInterval();
            }else{
                contador += 1;
                numero.innerHTML = contador + "%"
            }
        },34)
    }
    else if (tgt.getAttribute('id') == 'css'){
        tgt.classList.add('abajo');
        numero1.classList.add('abajo');
        porce1.classList.add('play');
        setInterval(() => {
            if(contador1 == 65){
                clearInterval
            }else{
                contador1 +=1;
                numero1.innerHTML = contador1 +"%"
            }
        },46)
    }
    else if (tgt.getAttribute('id') == 'js'){
        tgt.classList.add('abajo');
        numero2.classList.add('abajo');
        porce2.classList.add('play');
        setInterval(() => {
            if(contador2 == 50){
                clearInterval
            }else{
                contador2 +=1;
                numero2.innerHTML = contador2 +"%"
            }
        },60)
    }
    else if (tgt.getAttribute('id') == 'sql'){
        tgt.classList.add('abajo');
        numero3.classList.add('abajo');
        porce3.classList.add('play');
        setInterval(() => {
            if(contador3 == 50){
                clearInterval
            }else{
                contador3 +=1;
                numero3.innerHTML = contador3 +"%"
            }
        },60)
    }
    else if (tgt.getAttribute('id') == 'php'){
        tgt.classList.add('abajo');
        numero4.classList.add('abajo');
        porce4.classList.add('play');
        setInterval(() => {
            if(contador4 == 30){
                clearInterval
            }else{
                contador4 +=1;
                numero4.innerHTML = contador4 +"%"
            }
        },100)
    }
    else if (tgt.getAttribute('id') == 'angular'){
        tgt.classList.add('abajo');
        numero5.classList.add('abajo');
        porce5.classList.add('play');
        setInterval(() => {
            if(contador5 == 60){
                clearInterval
            }else{
                contador5 +=1;
                numero5.innerHTML = contador5 +"%"
            }
        },50)
    }
    else if (tgt.getAttribute('id') == 'bootstrap'){
        tgt.classList.add('abajo');
        numero6.classList.add('abajo');
        porce6.classList.add('play');
        setInterval(() => {
            if(contador6 == 40){
                clearInterval
            }else{
                contador6 +=1;
                numero6.innerHTML = contador6 +"%"
            }
        },75)
    }
    else if (tgt.getAttribute('id') == 'node'){
        tgt.classList.add('abajo');
        numero7.classList.add('abajo');
        porce7.classList.add('play');
        setInterval(() => {
            if(contador7 == 30){
                clearInterval
            }else{
                contador7 +=1;
                numero7.innerHTML = contador7 +"%"
            }
        },100)
    }
} 


