const agepassenger= prompt('Quanti anni hai?');
const numberkm= parseInt(prompt('Quanti km vuoi percorrere?'));
const priceticket= numberkm * 0.21;
let discount20;
let discount40;

if(agepassenger < 18) {
   discount20= (priceticket * 20) / 100;
   console.log(discount20);
   console.log('prezzo scontato del 20%');
} else if(agepassenger > 65) {
    discount40= (priceticket * 40) / 100;
    console.log(discount40);
    console.log('prezzo scontato del 40%');
} else{
    console.log(priceticket);
    console.log('prezzo normale');
}