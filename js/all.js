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
    var text2 =document.getElementById("ptext2");
    var text3 =document.getElementById("ptext3");
    var text4 =document.getElementById("ptext4");
    var input2 =document.getElementById("input2").value;
    if(inputtest===""||inputtest===null){
  return text.innerHTML="ورودی ها نامعتبر"
    
  }
  if(typeof inputtest==="number")
  {
   text1.innerHTML="نام کاربری را درست وارد کنید"
  }

  if(inputtest.length<=8)
  {
     text2.innerHTML="!نام کاربری =8 کارکتر به بالا رمز عبور =4 کارکتر به بالا" 
    
  }

if(input2.length>=4||input2.length>=6)
{
  return text3.innerHTML="ارسال موفقیت امیز بود"

}

else{
 text4.innerHTML="کارکتر رمز عبور از 6 کمتر نباشد"

}


  
}

// function autoRefresh(t)
// 		{
// 			setTimeout('location.reload(true)', t);
// 			alert("صفحه refresh شد");
// 		}