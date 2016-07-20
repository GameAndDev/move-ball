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


    //C'est ici que l'on placera tout le code servant à nos dessins.
}
