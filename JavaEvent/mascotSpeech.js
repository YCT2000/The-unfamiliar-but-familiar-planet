const startMP = document.querySelector('#startMain')
const mascotMain = document.querySelector('.ellipse')
const mascotSpeechDiv = document.querySelector('.mascotSpeech')
const dialogueMain = document.querySelector('#dialogueMain')
const guideMainBTN = document.querySelector('#guideMainBTN')




guideMainBTN.addEventListener('click', ()=>{
    mascotMain.classList.add('mascot_bubbleFaded')
    mascotSpeechDiv.classList.add('mascot_bubbleFaded')
    startMP.style.opacity = ('0')

    
})



mascotMain.addEventListener('mouseover',()=>{
    mascotMain.style.cursor=('pointer')
})

mascotMain.addEventListener('click',()=>{

    mascotSpeechDiv.classList.remove('mascot_bubbleFaded')
    startMP.style.opacity = ('1')
   

})

