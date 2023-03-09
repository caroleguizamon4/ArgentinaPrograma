/*Funcion para redirigir a forms*/
document.getElementById('boton').onclick = function () {
   console.log ("Nos quieren contactar")
   window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSfZNAS3nRzks4978EoXTwKayDRKnJdEMK31oHj5hcTQuMASFA/viewform"
};
/*Funcion para cambiar a modo diurno y viceversa*/   
let modo=document.getElementById("modoVis")

modo.addEventListener ("click", function(){
    if (modo.className.includes("fa-sun")){
        modo.className= "fa-solid fa-moon";
        modo.title="Modo nocturno activo";
        document.documentElement.style.setProperty('--imagenfondo', 'url(./Img/Fondo.jpg)');
        document.documentElement.style.setProperty('--colorfondobody', '#eeeeee');        
        document.documentElement.style.setProperty('--colorrow', '#9fc5e8');
        document.documentElement.style.setProperty('--colortexto', '#eeeeee');        
    } else {
        modo.className="fa-solid fa-sun";
        modo.title="Modo diurno activo";   
        document.documentElement.style.setProperty('--imagenfondo', 'url(./Img/FondoDiurno.jpg)');
        document.documentElement.style.setProperty('--colorfondobody', 'black');        
        document.documentElement.style.setProperty('--colorrow', '#7fd5f7');
        document.documentElement.style.setProperty('--colortexto', 'black');   

    }
})
