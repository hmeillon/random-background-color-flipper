const colors = ["#F0F8FF", "#FAEBD7", "#00FFFF", "#7FFFD4", "#F0FFFF", "#F5F5DC", "#FFE4C4", "#8A2BE2", "#5F9EA0", "#7FFF00", "#FF7F50", "#DC143C", "#B8860B", "#8FBC8F", "#FF1493", "#B22222", "#DCDCDC", "#ADFF2F", "#F0FFF0", "#4B0082", "#FFF0F5", "#F08080", "#E0FFFF", "#20B2AA",  "#800000", "#00FA9A", "#000080", "#DDA0DD", "#6A5ACD", "#008080", "#FF6347", "#EE82EE", "#F5DEB3", "#F5F5F5", "#FFFF00", "#9ACD32"];

function randomColor(){
    var randomized = Math.floor(Math.random() *  colors.length);
    var randomizedColor = colors[randomized];
    document.querySelector("body").setAttribute("style", "background-color: " + randomizedColor);
    document.querySelector("#color").innerHTML = randomizedColor;
};

document.querySelector(".e-e").addEventListener("click", function(){
    alert("You found me!🎉 I'm an easter egg! 🥚");
});