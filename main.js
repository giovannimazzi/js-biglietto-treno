//Prezzo unitario biglietto
const unitPrice = 0.21;
console.log(`Prezzo unitario biglietto = € ${unitPrice}`);

//Variabile per lo sconto
let discount;

//Messagi di utility
const notValidInput = `Il numero inserito non è valido.
Ricaricare la pagina e tentare nuovamente.`;

const hintInput = `

Se è stato digitato un numero errato: 
Ricaricare la pagina e tentare nuovamente.`;

//Acquisisco primo input
const km = parseFloat(
  prompt(`Inserire il numero di chilometri da percorrere:`)
);

//Validazione primo input
if (!km || km < 0) {
  alert(notValidInput);
  throw new Error(`${notValidInput.substring(0, 30)}: ${km}`);
} else {
  alert(`Chilometri da percorrere = ${km}${hintInput}`);
}
console.log(`Chilometri da percorrere = ${km}`);

//Acquisisco secondo input
const age = parseInt(prompt(`Inserire la propria età:`));

//Validazione secondo input
if (!age || age < 0) {
  alert(notValidInput);
  throw new Error(`${notValidInput.substring(0, 30)}: ${age}`);
} else {
  alert(`Età = ${age}${hintInput}`);
}
console.log(`Età = ${age}`);

//Selezione sconto
if (age < 18) {
  discount = 20;
} else if (age > 65) {
  discount = 40;
} else {
  discount = 0;
}
console.log(`Sconto applicato = ${discount}%`);
