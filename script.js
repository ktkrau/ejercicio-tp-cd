console.log("Página cargada");

function click_editar(){
    alert("Editando perfil")
}
var doble_click = 0;
function dobleclick_avatar(){
    doble_click ++;
    console.log("Ha hecho doble click: "+doble_click+" veces")
}

function over(){
    console.log("El mouse está sobre Elena")
}
function out(){
    console.log("El mouse está fuera de Elena")
}
function cambieNombre(elemento_h1){ // recibimos el elemento h1
    console.log(elemento_h1); //La etiqueta la tratamos como objeto

    if(elemento_h1.innerText === "Elena de Troya"){
        elemento_h1.innerText = "Juana de Arco"
    }else{
        elemento_h1.innerText = "Elena de Troya"
    }


   // elemento_h1.innerText = "Juana de Arco"; 
}
function cambiaImagen(elemento_img){
    /* elemento_img.src = "img/gear.png" */
    console.log(elemento_img.src)
    if(elemento_img.src.includes('img/map-marker.png')){
        elemento_img.src =  "img/gear.png"
    }else{
        elemento_img.src = "img/map-marker.png"
    }
}
function elimine(elemento_p){
    elemento_p.remove(); // elimina elemento al que estamos haciendo doble click
}
