 
//--------

var mBox=document.getElementsByClassName("m-box"),
	stBox=document.getElementsByClassName("st-box")[0],
	flag=false,
	navBox=document.getElementsByClassName("nav-box"),
	seBox=document.getElementsByClassName("m-semain")[0],
	addBox=document.getElementsByClassName("add-box")[0],
	thBox=document.getElementsByClassName("g-thwk")[0];


//------task one
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


//----task two
for(var i=0;i<navBox.length;++i){
	navBox[i].onclick=function(){
		for(let j=0;j<navBox.length;++j){
			navBox[j].style.backgroundColor="white";
		}
		this.style.backgroundColor="grey";
		seBox.getElementsByTagName("span")[0].innerHTML=Array.prototype.indexOf.call(this.parentNode.children,this)+1;
	}
}


//task three
addBox.onclick=function(){
	var fa=this.parentElement;
	var num=fa.childElementCount>1?parseInt(fa.children[fa.childElementCount-2].children[0].innerText)+1:1;
	var addHtml="<div class=\"data-box\"><div class=\"data-box-ft fn-fontft\"><span>1</span></div><div class=\"data-box-se fn-fontft\"><span>Delete</span></div></div>";
	this.insertAdjacentHTML("beforeBegin",addHtml);
	fa.children[fa.childElementCount-2].children[0].innerText=num;
	fa.children[fa.childElementCount-2].children[1].addEventListener("click",function(){
		this.parentElement.remove();
	});
}
for(let i=0;i<thBox.childElementCount-1;++i){
	thBox.children[i].children[1].addEventListener("click",function(){
		this.parentElement.remove();
	});
}