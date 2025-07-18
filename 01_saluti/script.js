/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.

function salutaUtente(nome) {
    return 'Ciao ' + nome
}

// Invoca la funzione qui e stampa il risultato in console

let saluta = salutaUtente (userName)

console.log (saluta)


//Risultato atteso se si passa 'Mario': // ciao Mario

/* Aggiungo la funzione arrow con return implicito perché:
Uso questa sintassi con la arrow function nella forma compatta
perché la funzione è molto semplice: prende un solo parametro (userName)
e restituisce direttamente una stringa formata da "Ciao " + il nome passato.
In questo caso non servono le parentesi graffe né la parola chiave 'return'
perché JavaScript, quando trova una sola espressione dopo la freccia (=>),
restituisce automaticamente il suo valore (return implicito).
Inoltre, non è necessario usare le parentesi tonde intorno al parametro
perché ce n’è solo uno. Se fossero più parametri, le parentesi sarebbero obbligatorie. */

const salutaUtenteArrow = nome => 'Ciao ' + nome;

// Invoco anche la arrow function

let salutoArrow = salutaUtenteArrow(userName);
console.log(salutoArrow); // Output: Ciao Mario