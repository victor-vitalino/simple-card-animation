// control animation

const card = document.querySelector('.card');
const container = document.querySelector('.container');

// itens to animate
const title = document.querySelector('.title')
const sneaker = document.querySelector('.sneaker img')
const purchase = document.querySelector('.purchase button')
const description = document.querySelector('.info h3')
const sizes = document.querySelector('.sizes')



// moving animation event
container.addEventListener('mousemove', event => {
    let xAxis = (window.innerWidth / 2 - event.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - event.pageY) / 25;

    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// animate in
container.addEventListener('mouseenter', e => {
    card.style.transition = 'none'

    // animating contents
    title.style.transform = 'translateZ(150px)';
    sneaker.style.transform = 'translateZ(200px) rotateZ(-45deg)';
    description.style.transform = 'translateZ(125px)';
    sizes.style.transform = 'translateZ(150px)';
    purchase.style.transform = 'translateZ(125px)';
})

// animation out
container.addEventListener('mouseleave', event => {
    card.style.transition = 'all 0.5s ease'
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;

    //back to normal
    title.style.transform = 'translateZ(0px)';
    sneaker.style.transform = 'translateZ(0px) rotateZ(0deg)';
    description.style.transform = 'translateZ(0px)';
    sizes.style.transform = 'translateZ(0px)';
    purchase.style.transform = 'translateZ(0px)';
})