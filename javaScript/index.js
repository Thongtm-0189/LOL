var spell=document.getElementsByClassName("on");

var detail=document.getElementsByClassName("in");

spell[0].onclick = function() {
    for(let i=0;i < spell.length; i++){
        if(i!=0){
            detail[i].style.display="none";
        }else{
            detail[i].style.display="block";
        }
    }
}

spell[1].onclick = function() {
    for(let i=0;i < spell.length; i++){
        if(i!=1){
            detail[i].style.display="none";
        }else{
            detail[i].style.display="block";
        }
    }
}

spell[2].onclick = function() {
    for(let i=0;i < spell.length; i++){
        if(i!=2){
            detail[i].style.display="none";
        }else{
            detail[i].style.display="block";
        }
    }
}

spell[3].onclick = function() {
    for(let i=0;i < spell.length; i++){
        if(i!=3){
            detail[i].style.display="none";
        }else{
            detail[i].style.display="block";
        }
    }
}

spell[4].onclick = function() {
    for(let i=0;i < spell.length; i++){
        if(i!=4){
            detail[i].style.display="none";
        }else{
            detail[i].style.display="block";
        }
    }
}

spell[5].onclick = function() {
    for(let i=0;i < spell.length; i++){
        if(i!=5){
            detail[i].style.display="none";
        }else{
            detail[i].style.display="block";
        }
    }
}

spell[6].onclick = function() {
    for(let i=0;i < spell.length; i++){
        if(i!=6){
            detail[i].style.display="none";
        }else{
            detail[i].style.display="block";
        }
    }
}

spell[7].onclick = function() {
    for(let i=0;i < spell.length; i++){
        if(i!=7){
            detail[i].style.display="none";
        }else{
            detail[i].style.display="block";
        }
    }
}

spell[8].onclick = function() {
    for(let i=0;i < spell.length; i++){
        if(i!=8){
            detail[i].style.display="none";
        }else{
            detail[i].style.display="block";
        }
    }
}

spell[9].onclick = function() {
    for(let i=0;i < spell.length; i++){
        if(i!=9){
            detail[i].style.display="none";
        }else{
            detail[i].style.display="block";
        }
    }
}

spell[10].onclick = function() {
    for(let i=0;i < spell.length; i++){
        if(i!=10){
            detail[i].style.display="none";
        }else{
            detail[i].style.display="block";
        }
    }
}

spell[11].onclick = function() {
    for(let i=0;i < spell.length; i++){
        if(i!=11){
            detail[i].style.display="none";
        }else{
            detail[i].style.display="block";
        }
    }
}

var open_menu = document.getElementById('tab_menu');
var sub_tabs = document.querySelectorAll('#sub_tab');
var tab_menu = document.getElementById('header');

open_menu.onclick = function myFunction() {
    if(tab_menu.offsetHeight == 60){
        tab_menu.style.height = "360px"
    }else{
        tab_menu.style.height = "60px"
    }

}

sub_tabs.forEach(sub_tab =>{
    sub_tab.addEventListener('click',()=>{
        tab_menu.style.height = '60px'
    })
})

/* for(;;){
    if(screen.width>620){
        tab_menu.style.overflow = "auto"
        break
    }
} */
