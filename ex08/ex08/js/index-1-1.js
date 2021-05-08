
$(document).ready(function(){
    $("#img").click(function () {
        $(this).toggleClass("max");
        $(this).toggleClass("min");
    });
    $(".img-select").find("img").on("click",function () {
        $(this).each(function () {
            var $this = $(this);
            var $img = $this.attr("src");
            $("#img-box").find("img").attr("src",$img);
            $("#dialog-bg").show();
        });
    });
    
    $("#dialog-bg").on("click",function () {
        $(this).hide();//
    });
});