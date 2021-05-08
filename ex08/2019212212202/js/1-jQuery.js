$(document).ready(function(){
	$(".st-box").hide();
	$(".nav-box:nth-child(1)").css({"background-color":"grey"});
	var addData=function(){
		$(".data-box:nth-last-child(1)").clone(true).appendTo($(".data-box:nth-last-child(1)"));
		$(".data-box:nth-last-child(1)>.data-box-ft").html($(".g-thwk").children().length);
	}
	var flag=false;
	$(".m-box").click(function(e){
		if(flag==true) return;
		e.stopPropagation();
		flag=true;
		var cnt=0,num=5/80;
		var time_id=setInterval(function(){
			cnt+=num;
			$(".m-box").css({"filter": "blur("+(cnt)+"px)" });
			if(cnt>=5) clearInterval(time_id);
		},10);
		$(".st-box").css({"background-color":$(this).css("background-color"),"z-index":"2"});
		$(".st-box").fadeIn(800);
	});
	$(window).click(function(){
		if(flag){
			var cnt=5,num=5/80;
			var time_id=setInterval(function(){
				cnt-=num;
				$(".m-box").css({"filter": "blur("+(cnt)+"px)" });
				if(cnt<=0) clearInterval(time_id);
			},10);
			$(".st-box").fadeOut(800,function(){
			});
		}
		flag=false;
	})
})