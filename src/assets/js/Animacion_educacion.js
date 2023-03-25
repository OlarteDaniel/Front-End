window.addEventListener('scroll',function(){


    var Mesa = document.querySelector('.mesa');
    var porta = document.querySelector('.porta');
    var lupa = document.querySelector('.lupa');
    var carpeta = document.querySelector('.carpeta');
    var libro = document.querySelector('.book-content')
    
    var altura = window.innerHeight;

    var distancia = Mesa?.getBoundingClientRect().top;

    if(distancia <= altura){
        
        Mesa.classList.add('arriba');
        porta.classList.add('derecha');
        lupa.classList.add('izquierda');
        carpeta.classList.add('derecha');
        libro.classList.add('aparecer');
        
    }
    else if(distancia >altura){
        Mesa.classList.remove('arriba');
        porta.classList.remove('derecha');
        lupa.classList.remove('izquierda');
        carpeta.classList.remove('derecha');
        libro.classList.remove('aparecer');
        libro.classList.remove('trnsf');
        libro.classList.remove("trnsf-reset");
    }
    
})
    