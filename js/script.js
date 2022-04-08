/*
Il programma dovrà mostrare una form da compilare con cui chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
Il recap dei dati e l'output del prezzo finale va stampato in pagina (formattato con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
Consigli:
Iniziate il lavoro con html base, implementate la logica e le iterazioni con utente. Soltanto quando siete sicuri che funziona tutto passate all'aspetto grafico.
*/

// Compilazione km da percorrere e età cliente
const nomeCognome = document.getElementById('nome-cognome').value;
const trattakm= document.getElementById('percorso').value;

const prezzo = trattakm * 0.21
console.log(prezzo);

// Calcolo prezzo biglietto
// prezzo standard = NumerKM x 0.21€
// Se selezionato "minorenne" allora Prezzo - 20%
// Se selezionato "over65" allora Prezzo - 40%

// stampare il tutto su schermo negli appositi spazi