const menuBar = document.querySelector(".menu");
const Navbar = document.querySelector(".Navbar");
const closeBar = document.querySelector(".close")
function openMenu(){
    Navbar.style.position = "absolute";
    Navbar.style.top="0%"
    Navbar.style.height="170px";
    Navbar.style.transition = "1s"
}

menuBar.onclick = openMenu


function close(){
    Navbar.style.position = "absolute";
    Navbar.style.top="-60%"
    Navbar.style.height="0px";
    Navbar.style.transition = "1s"
}

closeBar.onclick = close;