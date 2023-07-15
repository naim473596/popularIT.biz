// let top_meno = document.querySelector("#Navigation"); 
// let top = document.querySelector("#top"); 
// window.onscroll = function(){
//     let SCROLL = window.scrollY;
//     if(SCROLL >= 20){
//         top_meno.classList.add("new_top")
//     }else{
//         top_meno.classList.remove("new_top")
//     }
// }


let top_header = document.querySelector("#top_header");
let Nav = document.querySelector("#Nav");


// window.onscroll = ()=>{
//     let SCROLL = window.scrollY;
//     if(SCROLL>=1){
//         top_header.style.display="none"
//         Nav.style.position='fixed'
//     }else{
//         top_header.style.display="block"
//     }
// }



// counting

let count1 = document.querySelector("#count1");
let count2 = document.querySelector("#count2");
let count3 = document.querySelector("#count3");
let count4 = document.querySelector("#count4");
let COUNT=0;

let Rana1 = setInterval(naim,200);
function naim(){
    COUNT++;
    count1.innerHTML=COUNT;
    if(COUNT>=50){
        clearInterval(Rana1)
    }
}

let Rana2 = setInterval(naimul,100);
function naimul(){
    COUNT++;
    count2.innerHTML=COUNT;
    if(COUNT==50){
        clearInterval(Rana2)
    }
}

let Rana3 = setInterval(nayeem,100);
function nayeem(){
    COUNT++;
    count3.innerHTML=COUNT;
    if(COUNT<=100){
        clearInterval(Rana3)
    }
}

let Rana4 = setInterval(nayeemul,200);
function nayeemul(){
    COUNT++;
    count4.innerHTML=COUNT;
    if(COUNT>=50){
        clearInterval(Rana4)
    }
}



// login or sign in btn

let loginbtn = document.querySelector("#loginbtn");
let all_body = document.querySelector("#all_body");
let LOGIN_BTN = document.querySelector("#LOGIN_BTN");
let singinbtn = document.querySelector("#singinbtn");
let SINGIN_BTN = document.querySelector("#SINGIN_BTN");


loginbtn.addEventListener("click", ()=>{
    all_body.style.display='none'
    LOGIN_BTN.style.display='block'
})
singinbtn.addEventListener("click", ()=>{
    all_body.style.display='none'
    SINGIN_BTN.style.display='block'
})



// cursor event
$(function(){
    $('.cursor').confettiButton();
});
$(document).mousemove(function(e){
    $('.cursor').css({left:e.pageX, top:e.pageY,})
})