const meneBar = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");
const closebar = document.querySelector(".close");
function openMenu(){
    navbar.style.position = "absolute";
    navbar.style.top="0%"
    navbar.style.height="170px";
    navbar.style.transition = "1s"
}

menuBar.onclick = openMenu

function close(){
    navbar.style.position = "absolute";
    navbar.style.top="60%";
    navbar.style.height="0px";
    navbar.style.transition = "1s"


}

closeBar.onclick = close;