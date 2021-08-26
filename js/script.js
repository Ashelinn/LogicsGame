let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

//Размер холста зависит от ширины экрана
Resize();
window.addEventListener("resize", Resize);