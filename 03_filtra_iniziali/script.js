/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui.

function filtraNomiConIniziale(elements, lettera) {
    const risultati = [];

    for (let i = 0; i < elements.length; i++) {
        const nome = elements[i];
        // prendo ogni elemento 

        const iniziale = nome[0]
        if (iniziale.toLowerCase() === lettera.toLowerCase()) {
            risultati.push(nome)

        }
    }

    return risultati
}
// Invoca la funzione qui e stampa il risultato in console
const risultato = filtraNomiConIniziale(names, "l");
console.log(risultato)




//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]