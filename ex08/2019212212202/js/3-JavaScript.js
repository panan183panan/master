var addBox=document.getElementsByClassName("add-box")[0],
	thBox=document.getElementsByClassName("g-thwk")[0];

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