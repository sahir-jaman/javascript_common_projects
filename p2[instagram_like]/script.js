let image = document.querySelector("#cardImage");
let love = document.querySelector("i");


image.addEventListener("dblclick", function(){
    love.style.transform = "scale(1)";
    setTimeout(function(){
        love.style.transform = "scale(0)";
    }, 600);
});

