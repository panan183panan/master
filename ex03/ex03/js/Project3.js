document.getElementById("p1").onclick=function(){
    document.getElementById("p1").style.color="red";
    alert("你当前点击的序号为1！");
}
var d = new Date();
var year=d.getFullYear();
var month=d.getMonth()+1;
var day=d.getDate();
document.getElementById("p2").onclick=function(){
    document.getElementById("p").innerHTML=year+"-"+month+"-"+day;
    alert("你当前点击的序号为2！");
}

document.getElementById("p3").onclick=function(){
	document.getElementById("p3").classList.add("fn-active");
	alert("你当前点击的序号为3！");
}

document.getElementById("p4").onclick=function(){
	document.getElementById("p8").remove();
	alert("你当前点击的序号为4！");
}

document.getElementById("p5").onclick=function(){
	window.location.assign("https://uland.taobao.com/sem/tbsearch");
	alert("你当前点击的序号为5！");
}

document.getElementById("p6").onclick=function(){
	var u = document.getElementById("myul");
	var m = document.createElement("li");
	var text = document.createTextNode("p9");
	m.appendChild(text);
	u.appendChild(m);
	alert("你当前点击的序号为6！");
}

document.getElementById("p7").onclick=function(){
	var mywidth = document.getElementById("km").clientWidth;
	km.style.width =(mywidth+513)+"px";
	alert("你当前点击的序号为7！");
}

document.getElementById("p8").onclick=function(){
	alert("你当前点击的序号为8！");
}
document.getElementById("myul").addEventListener("clivk",function(e) {
	if(e.target && e.target.nodeName == "LI"){
		alert("List item ",e.target.id.replace("p")," was clicked!");
	}
})
