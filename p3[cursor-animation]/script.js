var main = document.querySelector(".main");
var crsr = document.querySelector(".cursor");

main.addEventListener("mousemove", function(sahir_moves){
    crsr.style.left = sahir_moves.x+"px"
    crsr.style.top = sahir_moves.y+"px"
});