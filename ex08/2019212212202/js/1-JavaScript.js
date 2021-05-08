var mBox=document.getElementsByClassName("m-box"),
	stBox=document.getElementsByClassName("st-box")[0],
	flag=false;

for(let i=0;i<mBox.length;++i){
	mBox[i].onclick=function(e){
		if(flag==true) return;
		e.stopPropagation();
		flag=true;
		var cnt=0,num=5/80;
		var time_id=setInterval(function(){
			cnt+=num;
			for(let j=0;j<mBox.length;++j) mBox[j].style.filter="blur("+cnt+"px)";
			if(cnt>=5) clearInterval(time_id);
		},10);
		stBox.style.opacity="0";
		stBox.style.backgroundColor=window.getComputedStyle(this,null).getPropertyValue("background-color");
		stBox.style.display="block";
		var cnt1=0,num1=1/80;
		var time_id1=setInterval(function(){
			cnt1+=num1;
			stBox.style.opacity=cnt1;
			if(cnt1>=1) clearInterval(time_id1);
		},10);
	}
}

window.onclick=function(){
	if(flag){
		flag=false;
		var cnt=5,num=5/80;
		var time_id=setInterval(function(){
			cnt-=num;
			for(let j=0;j<mBox.length;++j) mBox[j].style.filter="blur("+cnt+"px)";
			if(cnt<=0) clearInterval(time_id);	
		},10);
		var cnt1=1,num1=1/80;
		var time_id1=setInterval(function(){
			cnt1-=num1;
			stBox.style.opacity=cnt1;
			if(cnt1<=0){
				stBox.style.display="none";
				clearInterval(time_id1);
			}
		},10);
	}
}
