const navTable = document.querySelector('.navContainer')
const navBTN = document.querySelector('.hamburger')
const closeBTN = document.querySelector('.closeNav')
const webglCanvas = document.querySelector('.webgl')
navBTN.addEventListener('click',()=>{
    console.log('navBTN clicked')
    navTable.classList.remove('hide')
    closeBTN.classList.remove('hide')
    navBTN.classList.add('hide')
    webglCanvas.classList.add('.clickEventNone')
   
})

closeBTN.addEventListener('click',()=>{
    console.log('closeBTN clicked')
    navTable.classList.add('hide')
    closeBTN.classList.add('hide')
    navBTN.classList.remove('hide')
    webglCanvas.classList.remove('.clickEventNone')

})

const LogoIntro = document.querySelector('.nav__logo')

LogoIntro.addEventListener('click', ()=>{
    console.log('logo')
    window.location.href="index.html"
})

$(function() {
    $('.hamburger-mobile').click(function() {
        event.preventDefault();
        $('.navLinks_mobile').toggleClass('show'); 
    });
});
$(function() {
    $('#base_mobile').click(function() {
        event.preventDefault();
        $('.base__container-mobile').toggleClass('show'); 
    });
});

$(function() {
    $('#galaxy_mobile').click(function() {
        event.preventDefault();
        $('.galaxy__container-mobile').toggleClass('show'); 
    });
});