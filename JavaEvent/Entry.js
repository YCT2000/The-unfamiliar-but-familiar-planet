const startBtn = document.querySelector("#startBTN")
const WhiteBG = document.querySelector("#start")
const Logo = document.querySelector("#logo")
const BgImg = document.querySelector("#introBackground")
const nextBtn = document.querySelector('#nextBTN')



startBtn.addEventListener('click', ()=>{
    console.log('btn click')
    startBtn.classList.add('hide')
    nextBtn.classList.remove('hide')


   
    
})



