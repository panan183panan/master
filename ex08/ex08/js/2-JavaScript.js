var stBox=document.getElementsByClassName("st-box")[0],
	flag=false,
	navBox=document.getElementsByClassName("box"),
	seBox=document.getElementsByClassName("m-semain")[0];

for(var i=0;i<navBox.length;++i){
	navBox[i].onclick=function(){
		for(let j=0;j<navBox.length;++j){
			navBox[j].style.backgroundColor="white";
		}
		this.style.backgroundColor="grey";
		seBox.getElementsByTagName("span")[0].innerHTML=Array.prototype.indexOf.call(this.parentNode.children,this)+1;
	}
}