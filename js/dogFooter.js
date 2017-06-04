/**
 * Created by fov on 2017/4/6.
 */
$(".footer-wrapper>.flink>.click-arrow").on("click",function(){
    $(this).prev(".fwrapper").toggleClass("overflow");
    if($(this).prev(".fwrapper").css("height")=="20px"){
        $(this).prev(".fwrapper").css("height","auto")
    }else{
        $(this).prev(".fwrapper").css("height","20px")
    }
    if($(this).children().hasClass("footer-arrow-down")){
        $(this).children().removeClass("footer-arrow-down");
        $(this).children().addClass("footer-arrow-up");
    }else{
        $(this).children().removeClass("footer-arrow-up");
        $(this).children().addClass("footer-arrow-down");
    }

})
