const image = document.getElementById('iSeria')
const button = document.getElementById('iBtnHumor')
const text = document.getElementById('iHumor')

button.onclick = function(){
    if (button.value === "estado1"){
        text.value = "Espantada";
        image.src='img/espantada.png';
        button.value ="estado2";
    }
    else if (button.value === "estado2"){
        text.value='Nervosa';
        image.src='img/nervosa.png';
        button.value ="estado3";
    }
    else if (button.value === "estado3") {
        text.value='Feliz'
        image.src='img/feliz.png';
        button.value='estado4';        
    }
    else {
        text.value='Séria';
        image.src='img/seria.png';
        button.value='estado1';
    }
}
