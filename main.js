//Codice modificato per i bonus dei casi speciali: "Stefano" e "Tiziano"

//Se utente si chiama "Stefano" viaggia gratis
//Se utente si chiama "Tiziano" il suo prezzo unitario è di 0.50 €/km

//Variabile per lo sconto
let discount;

//Variabile per il prezzo (default 0)
let price = 0;

//Messagi di utility
const notValidInput = `Il numero inserito non è valido.
Ricaricare la pagina e tentare nuovamente.`;

const hintInput = `

Se è stato digitato un valore errato: 
Ricaricare la pagina e tentare nuovamente.`;

//Acquisisco nome input
const nome = prompt(`Inserire il proprio nome:`);
alert(`Nome = ${nome}${hintInput}`);
console.log(`Nome = ${nome}`);

//Prezzo unitario biglietto
let unitPrice = 0.21;
if (nome.toLowerCase() === "tiziano") {
  unitPrice = 0.5;
}
console.log(`Prezzo unitario biglietto = €/km ${unitPrice.toFixed(2)}`);

if (nome.toLowerCase() != "stefano") {
  //Acquisisco km input
  const km = parseFloat(
    prompt(`Inserire il numero di chilometri da percorrere:`)
  );

  //Validazione km input
  if (!km || km < 0) {
    alert(notValidInput);
    throw new Error(`${notValidInput.substring(0, 30)}: ${km}`);
  } else {
    alert(`Chilometri da percorrere = ${km}${hintInput}`);
  }
  console.log(`Chilometri da percorrere = ${km}`);

  //Acquisisco età input
  const age = parseInt(prompt(`Inserire la propria età:`));

  //Validazione età input
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

  //Calcolo prezzo
  price = km * unitPrice * (1 - discount / 100);
}

console.log(`Prezzo biglietto = € ${price.toFixed(2)}`);
alert(`Prezzo biglietto = € ${price.toFixed(2)}`);
