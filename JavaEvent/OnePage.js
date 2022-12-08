

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