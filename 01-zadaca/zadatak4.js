//Napiši funkciju koja pretvara broj X u sate i minute - Ispis : 120 -> “Ovo je 2 sata i 0 minuta”

function pretvarac(x) {
    var x;
    var sati = (x / 60);
    var preostaliSati = Math.floor(sati);
    var minute = (sati - preostaliSati) * 60;
    var preostaleMinute = Math.round(minute);
    return x + "=" + preostaliSati + " sati i " + preostaleMinute + " sekunde.";
    }
    
    console.log(pretvarac(20))