$(document).ready(function(){
    $(".box").click(function(){
        $(".box").css({"background-color":""});
        $(this).css({"background-color":"grey"});
        $(".m-semain>span").html(($(this).index()+1));
    })
})