// toggle icon navbar

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


// scroll section active link

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll= () => {
    sections.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });

    // remove toggle and navbar when scroll
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
// scroll reveal
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200

});
ScrollReveal().reveal('.heading, .bg-video',{origin: ('top')});
ScrollReveal().reveal('.home-content, .col',{origin: ('left')});
ScrollReveal().reveal('.movies-container, form',{origin: ('bottom')});
// typed js
const typed = new Typed('.multiple',{
    strings:['Movie', 'Series'],
    typespeed: 100,
    backspeed: 300,
    backdelay: 1000,
    loop: true

});
var uploadField = document.getElementById("file");

uploadField.onchange = function() {
    if(this.files[0].size > 2097152){
       alert("File is too big!");
       this.value = "";
    };
};