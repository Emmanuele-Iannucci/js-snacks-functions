/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Ciclo for fuori dalla funzione: crea l'array di iniziali
const initials = [];

for (let i = 0; i < names.length; i++) {    
    const iniziale = names[i][0];                      
    /*Prendo il nome corrente dell’array (names[i]). 
    Poi prendo la prima lettera del nome usando [0], cioè il carattere in posizione 0.
    Salvo questa lettera nella variabile iniziale */
    initials.push(iniziale);
}

// Dichiara la funzione qui 
// Uso il risultato del ciclo

function stampaIniziali (array) {
    return array;
}
// Invoca la funzione qui e stampa il risultato in console

const risultato = stampaIniziali(initials);
console.log(risultato);

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]