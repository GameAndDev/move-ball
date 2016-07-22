window.onload = function()
{
    var canvas = document.getElementById('mon_canvas');
        if(!canvas)
        {
            console.log("Impossible de récupérer le canvas");
            return;
        }

    var context = canvas.getContext('2d');
        if(!context)
        {
            console.log("Impossible de récupérer le context du canvas");
            return;
        }
        console.log("récupération du canvas réussie");
var Xscreen = window.innerWidth;
var Yscreen = window.innerHeight;
console.log("Xscreen = " + Xscreen );
console.log("Yscreen = " + Yscreen);
var Xcircle = Xscreen/2;
var Ycircle = Yscreen/2;

context.beginPath();
context.fillStyle = "#e91c1c";
context.arc(Xcircle, Ycircle, 50, 0, Math.PI*2);
context.fill();
context.closePath();


    //C'est ici que l'on placera tout le code servant à nos dessins.
}
