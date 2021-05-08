$(document).ready(function(){
  $(".bt-select").find("btn").on("click",function (){
    $(this).each(function () {
      var $this = $(this);
      $dt = $("<span>"+1+"</span>");
      $("#btn").append($dt);
    });
  });
});