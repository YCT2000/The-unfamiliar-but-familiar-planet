

const text = document.querySelectorAll('#scrollAni')
let options = {
  rootMargin:'-10%',
  threshold: 0.6,

}
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry =>{
    if(entry.isIntersecting){
      entry.target.children[0].classList.add('activeText')
    }

    else{
      entry.target.children[0].classList.remove('activeText')
    }
    
  })
})

for(let i =0; i<text.length;i++){
  observer.observe(text[i])
}


var $st = $('.pagination');
var $slickEl = $('.center');



window.onload=function(){

$('.slider').slick({
  centerMode: true,
  centerPadding: '0px',
  slidesToShow: 3,
  autoplay:true,
  autoplaySpeed:1500,
  arrows: false,
  dots:true,

  
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 1
      }
    }
  ]
});
}

<script>
/*TV*/
const TV = document.getElementsByClassName('TV') 
let options2={
    rootMargin:'-10%',
    threshold:0.6
}

const observer2 = new IntersectionObserver(entries => {
entries.forEach(entry =>{
if(entry.isIntersecting){
    entry.target.classList.add('activeTV')
    }

else{
    console.log('no')
    entry.target.classList.remove('activeTV')
    }

})
})

for(i =0; i<TV.length;i++){
observer2.observe(TV[i])
console.log('hey')
}

const Tiger = document.getElementsByClassName('tiger') 
let options3={
    rootMargin:'-10%',
    threshold:0.6
}


/*Tiger*/
const observer3 = new IntersectionObserver(entries => {
entries.forEach(entry =>{
if(entry.isIntersecting){
    entry.target.classList.add('activeTiger')
    }

else{
    console.log('no')
    entry.target.classList.remove('activeTiger')
    }

})
})

for(i =0; i<Tiger.length;i++){
observer3.observe(Tiger[i])
console.log('hey')
}

/*Watch*/
const Watch = document.getElementsByClassName('watch') 
let options4={
    rootMargin:'-10%',
    threshold:0.6
}

const observer4 = new IntersectionObserver(entries => {
entries.forEach(entry =>{
if(entry.isIntersecting){
    console.log('watch is here')
    entry.target.classList.add('activeWatch')
    }

else{
    console.log('no')
    entry.target.classList.remove('activeWatch')
    }

})
})

for(i =0; i<Watch.length;i++){
observer4.observe(Watch[i])
console.log('hey')
}

</script>