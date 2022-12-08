const navTable = document.querySelector('.navContainer')
const navBTN = document.querySelector('.hamburger')
const closeBTN = document.querySelector('.closeNav')

navBTN.addEventListener('click',()=>{
    console.log('navBTN clicked')
    navTable.classList.remove('hide')
    closeBTN.classList.remove('hide')
    navBTN.classList.add('hide')
   
})

closeBTN.addEventListener('click',()=>{
    console.log('closeBTN clicked')
    navTable.classList.add('hide')
    closeBTN.classList.add('hide')
    navBTN.classList.remove('hide')

})

const LogoIntro = document.getElementById('LOGO')

LogoIntro.addEventListener('click', ()=>{
    console.log('logo')
    window.location.href="index.html"
})