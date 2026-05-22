let btnMenu = document.querySelector('.btn-menu');
let menu = document.querySelector('.menu');

let links = document.querySelectorAll('.menu a'); 

function manipularMenu(){
    
    menu.classList.toggle('menu-open');
    btnMenu.classList.toggle('x');
}

function fecharMenu(){
    menu.classList.remove('menu-open');
    btnMenu.classList.remove('x');
}

btnMenu.addEventListener('click',manipularMenu);

links.forEach(function(link){
    link.addEventListener('click',fecharMenu);
})

//HERO

gsap.from(".hero h1", {
    opacity: 0,
    x: -100,
    duration: 1.5,
});

gsap.from(".hero p:not(.slogan)", {
    opacity: 0,
    x: -100,
    duration: 1.5,
    delay: 0.5
});

gsap.from(".hero .container-btn", {
    opacity: 0,
    x: -100,
    duration: 1.5,
    delay: 1
});

//HERO

//SOBRE

gsap.from(".sobre-image, .sobre h2, .sobre figcaption, .sobre p, .sobre .container-btn", {
    opacity: 0,
    x: 100,
    duration: 1.5,
    stagger: 0.3,

    scrollTrigger : {
        trigger: '.sobre',
        start: 'top, 70%'
    }
});

//SOBRE

//SERVIÇOS

gsap.from(".servicos h2, .escolha-aqui", {
    opacity: 0,
    x: -100,
    duration: 1.5,
    stagger: 0.5,

    scrollTrigger : {
        trigger: '.servicos',
        start: 'top, 90%'
    }
});

gsap.from(".servicos-links", {
    opacity: 0,
    y: 100,
    duration: 1.5,
    stagger: 1,

    scrollTrigger : {
        trigger: '.servicos',
        start: 'top, 90%'
    }
});

//SERVIÇOS

//AGENDE

gsap.from(".agende h2, .agende p, .agende .container-btn", {
    opacity: 0,
    x: 100,
    duration: 1.5,
    stagger: 0.3,

    scrollTrigger : {
        trigger: '.agende',
        start: 'top, 90%'
    }
});

gsap.from(".agende .container .imagem", {
    opacity: 0,
    x: -100,
    duration: 1.5,
    stagger: 0.3,

    scrollTrigger : {
        trigger: '.agende',
        start: 'top, 90%'
    }
});
//AGENDE

//DEPOIMENTOS

gsap.from(".depoimentos", {
    opacity: 0,
    duration: 2,

    scrollTrigger : {
        trigger: '.depoimentos',
        start: 'top, 90%'
    }
});

//DEPOIMENTOS