gsap.registerPlugin(ScrollTrigger);

gsap.from(".animate-inicial-txt", {
    // duração da animação
    duration: 0.7,
    // opacidade que vai começar a animação
    opacity: 0,
    // posição do y que vai começar os elementos na animação
    y: -150,
    // tempo entre a animação dos elementos com a mesma classe 
    stagger: 0.4
});

gsap.from(".animate-inicial-img", {
    duration: 0.9,
    opacity: 0,
    x: 250
});

gsap.from(".animate-artigos", {
    duration: 0.8,
    opacity: 0,
    X: -150,
    stagger: 0.4,
    delay: 1.2
})


gsap.from(".animate-final", {
    scrollTrigger: ".animate-final",
    duration: 0.8,
    opacity: 0,
    y: -200,
    stagger: 0.5,
    delay: 0.5  // vai começar quando chegar no chapeu, irá estartar após 0.5
})


// =========================================================================================
// SITES: gsap.registerPlugin(ScrollTrigger);
//.animate-inicial-txt o que eu quero animar, depoiS declaramos quanto tempo

// gsap.from(".animate-inicial-txt", {
//     duration: 0.7, 
//     opacity: 0,       
//     y: -150          //eixo que queremos mexer no caso o y, vai aparecer de cima para baixo
//     stagger: 0.4    // tempo entre animação dos elementos com a mesma classe,  faz com que desça os elementos de forma separada, desce um depois do outro, tem que usar na mesma classe
// })

