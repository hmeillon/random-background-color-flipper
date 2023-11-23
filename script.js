const colors = ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "BlueViolet", "CadetBlue", "Chartreuse", "Coral", "Crimson", "DarkGoldenrod", "DarkSeaGreen", "DeepPink", "FireBrick", "Gainsboro", "GreenYellow", "HoneyDew", "Indigo", "LavenderBlush", "LightCoral", "LightCyan", "LightSeaGreen",  "Maroon", "MediumSpringGreen", "Navy","Plum", "SlateBlue", "Teal", "Tomato", "Violet", "Wheat", "WhiteSmoke", "Yellow", "YellowGreen"];

function randomColor(){
    var randomized = Math.floor(Math.random() *  colors.length);
    var randomizedColor = colors[randomized];
    document.querySelector("body").setAttribute("style", "background-color: " + randomizedColor);
    document.querySelector("#color").innerHTML = randomizedColor;
};

document.querySelector(".e-e").addEventListener("click", function(){
    alert("You found me!🎉 I'm an easter egg! 🥚");
});