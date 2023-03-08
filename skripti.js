//alert("Čau!")
console.log("tests");

const API = "https://suta-zinas-json-11.baibabite.repl.co"
var logs = document.querySelector(".chataZinas");
var vards = document.querySelector("#vards");
var zina = document.querySelector("#zina");

function sutitZinu(){
    console.log("Poga darbojas");
    console.log("ziņu ir: "+zina.value);

    logs.innerHTML = logs.innerHTML +"</br>"+ zina.value;
    fetch (API + '/sutit/' + vards.value + "/" + zina.value);
}

async function ieladetZinas(){
    let datiNoServera = await fetch(API +'/lasit');
    let dati = await datiNoServera.text();
    console.log(dati);
    logs.innerHTML = dati;
}

//reizi 1 sekundē izpilda funkciju ieladetZinas()
setInterval(ieladetZinas, 1000)