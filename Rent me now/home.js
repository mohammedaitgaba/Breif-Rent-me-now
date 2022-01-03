const navSlide = () => {
    let menu = document.querySelector('.menu');
    let nav = document.querySelector('.nav_liste');
    menu.addEventListener('click' , () => {
    nav.classList.toggle('nav-active');
    });
}
navSlide();
