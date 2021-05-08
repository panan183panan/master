$(document).ready(function(){
    $(".add-box").click(function(){
        var addHtml="<div class=\"data-box\"><div class=\"data-box-ft fn-fontft\"><span>1</span></div><div class=\"data-box-se fn-fontft\"><span>Delete</span></div></div>";
        $(".add-box").before(addHtml);
        var num=($(".g-thwk").children().length-1)==1?1:parseInt($(".data-box:nth-last-child(3)>.data-box-ft>span").html())+1;
        $(".data-box:nth-last-child(2)>.data-box-ft>span").html(num);
    });
    $(document).on("click",".data-box-se",function(){
        $(this).parent().remove();
    })
})