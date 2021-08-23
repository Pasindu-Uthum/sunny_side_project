const yellow1 = document.getElementById("yellow-underline-1");
const red1 = document.getElementById("red-underline-1");
const yellow2 = document.getElementById("yellow-underline-2");
const red2 = document.getElementById("red-underline-2");

yellow1.onmouseenter = function() {
    this.style.backgroundColor = "orange";
}

yellow2.onmouseenter = function() {
    this.style.backgroundColor = "orange";
}

red1.onmouseenter = function() {
    this.style.backgroundColor = "crimson";
}

red2.onmouseenter = function() {
    this.style.backgroundColor = "crimson";
}

yellow1.onmouseleave = function() {
    this.style.backgroundColor = "yellow";
}

yellow2.onmouseleave = function() {
    this.style.backgroundColor = "yellow";
}

red1.onmouseleave = function() {
    this.style.backgroundColor = "hsl(7, 99%, 70%)";
}

red2.onmouseleave = function() {
    this.style.backgroundColor = "hsl(7, 99%, 70%)";
}

const menu = document.getElementById("menu");
const close = document.getElementById("close");
const bars = document.getElementById("bars");

bars.onclick = function() {
    menu.style.display = "block";
}

close.onclick = function() {
    menu.style.display = "none";
}

function hide() {
    menu.style.display = "none";
}