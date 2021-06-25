$(window).scroll(function(){

    if($(this).scrollTop()>=200){
        $("#navBar").addClass("noTransparrent");
     }
    else{
        $("#navBar").removeClass("noTransparrent");
     }

});
// عند النقر على احد الروباط
$(document).ready(function(){
    $("a.scroll").on('click', function(event) {

        var hash = this.hash;

        $('html, body').animate({ scrollTop: $(hash).offset().top - 90 }, 800, function(){});
    
    });

    // مكتبة العداد
    $('.circle').circleProgress({
        // اضافةالشكل الدائري
        startAngle: -Math.PI / 2,
        // درجة الشفافية
        fill: "#0575e6"
    }).on('circle-animation-progress', function(event, progress, stepValue) {
        $(this).find('span').html(Math.round(stepValue * 100) + '%');
    });
    
    // مكتبة التحقق من دخل المستخدم
    $(function () {
        $("#commentForm").validate();
    });

});
