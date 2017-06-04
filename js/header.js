/**
 * Created by fov on 2017/4/6.
 */
$("#ec").on("mouseenter",function(){
    $(this).children("ul").css("display","block");
})
$("#ec").on("mouseleave",function(){
    $(this).children("ul").css("display","none");
})