/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Ciclo for fuori dalla funzione: crea l'array di iniziali

// Dichiara la funzione qui 
// Uso il risultato del ciclo

function stampaIniziali(names) {

    const initials = [];

    for (let i = 0; i < names.length; i++) {
        const iniziale = names[i][0];
        initials.push(iniziale);
    }




    return initials;
}
// Invoca la funzione qui e stampa il risultato in console

const risultato = stampaIniziali(names);
console.log(risultato);

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]