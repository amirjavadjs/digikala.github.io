var swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    direction: getDirection(),
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
      resize: function () {
        swiper.changeDirection(getDirection());
      },
    },
  });

  function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

    return direction;
  }
  


  function show(){
    var inputtest = document.getElementById("input").value;
    var text =document.getElementById("ptext");
    var text1 =document.getElementById("ptext1");
    if(inputtest===""||inputtest===null){
  return text.innerHTML="لطفا شماره خود را وارد کنید"
    
  }
  if(typeof inputtest==="string")
  {
    text1.innerHTML="شماره را درست وارد کن"
  }
}