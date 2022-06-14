// Dichiarazione e assegnazione variabili
let agepassenger= parseInt(prompt('Quanti anni hai?'));
console.log('età del passeggero');
console.log(agepassenger);


let numberkm= parseInt(prompt('Quanti km vuoi percorrere?'));
console.log('numero km da percorrere');
console.log(numberkm);


let priceticket= numberkm * 0.21;
let discount20;
let discount40;
let priceticketdiscount20;
let priceticketdiscount40;

// Associazione variabili a id html
document.getElementById('age-passenger').innerHTML= agepassenger;
document.getElementById('number-km').innerHTML= numberkm;

//Condizione nel caso di caratteri errati
if(isNaN(agepassenger)==true) {
    console.log('si prega di inserire i dati corretti');
    document.getElementById('age-passenger').innerHTML=agepassenger ;
    
  } else if(isNaN(numberkm)==true) {
    console.log('si prega di inserire i dati corretti');
    document.getElementById('number-km').innerHTML= numberkm
      

    // Condizione per i passeggeri minorenni
  } else if(agepassenger < 18) {
   discount20= (priceticket * 20) / 100;
   priceticketdiscount20= priceticket - discount20;
   priceticketdiscount20= priceticketdiscount20.toFixed(2);
   document.getElementById('discount-20').innerHTML= priceticketdiscount20;
   console.log('prezzo biglietto scontato del 20%');
   console.log(priceticketdiscount20);
   
   // Condizione per i passeggeri over 65
  } else if(agepassenger > 65) {
    discount40= (priceticket * 40) / 100;
    priceticketdiscount40= priceticket - discount40;
    priceticketdiscount40= priceticketdiscount40.toFixed(2);
    document.getElementById('discount-40').innerHTML= priceticketdiscount40;
    console.log('prezzo biglietto scontato del 40%');
    console.log(priceticketdiscount40);
    

    // Condizione in caso di prezzo non scontato
  } else{
    priceticket= priceticket.toFixed(2);
    document.getElementById('price-ticket').innerHTML= priceticket;
    console.log('prezzo biglietto');
    console.log(priceticket);
    
  }