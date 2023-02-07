//alert("Čau!")
console.log("tests");

var logs = document.querySelector(".chataZinas");
var vards = document.querySelector("#vards");
var zina = document.querySelector("#zina");

function sutitZinu(){
    console.log("Poga darbojas");
    console.log("ziņu ir: "+zina.value);

    logs.innerHTML = logs.innerHTML +"</br>"+ zina.value;
}

async function ieladetZinas(){
    let datiNoServera = await fetch("zinas.txt");
    let dati = await datiNoServera.text();
    console.log(dati);
}