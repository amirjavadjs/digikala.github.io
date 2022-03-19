function test()
{
    var input01 =document.getElementById("input01").value;
    var input02 =document.getElementById("input02").value;
    var input03 =document.getElementById("input03").value;
    var input04 =document.getElementById("input04").value;
    var input05 =document.getElementById("input05").value;
   var txt1 =document.getElementById("text01");
   var txt2 =document.getElementById("text02");
   var txt3 =document.getElementById("text03");
   var txt4 =document.getElementById("text04");
   var txt5 =document.getElementById("text05");
   var txt6 =document.getElementById("text06");

    if(input01.length<4||input02.length<4)
    {
        txt1.innerHTML="نام نا معتبر"
        txt2.innerHTML="نام و نام خانوادگی معتبر"
       
    }
      if(input03.length<4||input02.length<4)
    {
        txt3.innerHTML="ایمیل نامعتبر"

       
    }

    if(input04===""||input05===null)
    {
       return txt4.innerHTML="رمز را وارد کنید"
    }
    if(input04===input05||input05===input04)
    {
return  txt5.innerHTML="رمز متابقت دارد"
    }else{
        alert("هشدار:رمز عبور متابقت ندارد")
    }
   
}
