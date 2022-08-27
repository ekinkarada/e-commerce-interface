var span = document.getElementsByTagName('span');
var div = document.getElementsByClassName('anakart');
var l=0;

div.onclick=()=>{
    console.log("sadasd")
}

span[1].onclick = ()=>{
    console.log(span)
    l++;
    for(var i of div){
        if (l==0){i.style.left="0px";}
        if (l==1){i.style.left="-740px";}
        if (l==2){i.style.left="-1480px";}
        if (l==3){i.style.left="-2220px";}
        if (l==4){i.style.left="-2960px";}
        if (l>4) {l=4;}
    }
}
span[0].onclick = () =>{
    console.log(span)
    l--;
    for (var i of div){
        if (l==0) {i.style.left ="0px";}
        if (l==1) {i.style.left ="-740px";}
        if (l==2) {i.style.left ="-1480px";}
        if (l==3) {i.style.left ="-2220px";}
        if (l<0) {l=0;}
    }
}