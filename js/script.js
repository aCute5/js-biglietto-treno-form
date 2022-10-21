/*  Scrivere un programma che chieda all’utente:
 - Il numero di chilometri da percorrere
 - Età del passeggero
 Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
 - il prezzo del biglietto è definito in base ai km (0.21 € al km)
 - va applicato uno sconto del 20% per i minorenni
 - va applicato uno sconto del 40% per gli over 65.


*/
const buy = document.querySelector(".buy");

buy.addEventListener("click", function(){
    const nameSurname = document.querySelector(".name").value;
    document.querySelector(".ticketname").innerHTML = nameSurname;
    let path = document.querySelector(".path").value;
    let kmPrice = parseFloat(path * 0.21);
    let age = document.querySelector(".age").value;

    if (age == "Over60"){
        let finalPrice = kmPrice - (kmPrice * 0.4\0);
        document.querySelector(".ticketprice").innerHTML = finalPrice.toFixed(2)
        document.querySelector(".tickettype").innerHTML = ("Biglietto Anziani")
}
    else if(age == "Minorenne"){
        let finalPrice = kmPrice - (kmPrice * 0.20);
        document.querySelector(".ticketprice").innerHTML = finalPrice.toFixed(2)
        document.querySelector(".tickettype").innerHTML = ("Biglietto Giovani")
        
}    
    else{
        document.querySelector(".ticketprice").innerHTML = kmPrice.toFixed(2)
        document.querySelector(".tickettype").innerHTML = ("Biglietto Standard")
}       
})    
       
           



