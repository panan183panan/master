var l=document.getElementsByTagName('li');
var box=document.getElementById('box');
for(var i=0;i<l.length;i++){
    l[i].onclick=function(){
        var  newDiv=document.createElement('div');
        newDiv.className='newdiv';
        box.appendChild(newDiv);
        var  newImg=document.createElement('img');
        newImg.className='newp';
        newImg.src=this.getElementsByTagName('img')[0].src;
        box.appendChild(newImg);
        var newSpan=document.createElement("span");
        newSpan.innerHTML='X';
        box.appendChild(newSpan);
        newSpan.onclick=function(){
            box.removeChild(newDiv);
            box.removeChild(newSpan);
            box.removeChild(newImg);
        }
    }
} 
