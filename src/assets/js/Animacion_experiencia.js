window.addEventListener('scroll',function(){


    var imagen = document.querySelector('.flotante');
    var cartel = document.querySelector('.Cartel');
    var contenido = document.querySelector('.conte');
    
    var altura = window.innerHeight;

    var distancia = imagen?.getBoundingClientRect().top;
    var distancia_cartel = cartel?.getBoundingClientRect().top;

    if(distancia <= altura){
        imagen.classList.add('derecha');
        
    }
    else if(distancia > altura){
        imagen.classList.remove('derecha');
        
    }


    
    if(distancia_cartel <=altura){
        cartel.classList.add('arriba');
        contenido.classList.add('encendido');
    }
    else if (distancia_cartel > altura){
        cartel.classList.remove('arriba');
        contenido.classList.remove('encendido');
    }
    
})
    
