var burguer = document.getElementById('icon');
var menu_desplegado = document.getElementById('nav-icon');


function MostrarMenu(){
        burguer.addEventListener('click',agregarDisplay); 
}

function agregarDisplay(){
    menu_desplegado.classList.toggle('is-active');
    if(burguer.getAttribute('src') === './assets/icon-hamburger.svg'){
        burguer.setAttribute('src','./assets/icon-close.svg');
        
    }
    else{
        burguer.setAttribute('src','./assets/icon-hamburger.svg');
        
    }
 
}

MostrarMenu();