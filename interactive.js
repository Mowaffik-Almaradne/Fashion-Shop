
// this is element of html
const btn = document.querySelector(".btn-click");
const headerEL = document.querySelector(".main-header");

// event click 
btn.addEventListener("click",function(){
headerEL.classList.toggle("active");
});

// event  when he does user he does scroll it well hidden navebar                     
window.onscroll = () =>{
    headerEL.classList.remove("active");
}