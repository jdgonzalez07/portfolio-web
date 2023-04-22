let menuVisible = false;

// Funcion que oculta o muestra el menu

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList = "";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto menu una vez que selecciono una opción
    document.getElementById("nav").classList ="";
    menuVisible = false;
}
 // Función que aplica las animaciones de las habilidades
function efectoHablilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("github");
        habilidades[3].classList.add("vue");
        habilidades[4].classList.add("comunicacion");
        habilidades[5].classList.add("trabajo");
        habilidades[6].classList.add("creatividad");
        habilidades[7].classList.add("ingles");
    }
}
 // detecto scrolling para aplicar la animación de la barra de hablilidades

 window.onscroll = function(){
    efectoHablilidades();
 }



 //// Haciendo funcional el formulario

 const $formulario = document.querySelector('#form');
 const $buttonMailto = document.querySelector('#mailto');


 $formulario.addEventListener('submit', handleSubmit)

 function handleSubmit(event){
    event.preventDefault()
    const form = new FormData(this)
    $buttonMailto.setAttribute('href', `mailto:jdgonzalez2017@hotmail.com?subject=nombre: ${form.get('name')} - correo: ${form.get('email')}&body=${form.get('message')}`)
    $buttonMailto.click()
 }