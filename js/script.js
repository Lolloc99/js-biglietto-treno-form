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
// Button
document.getElementById("form-btn").addEventListener("click",
    function () {

        // prendo i dati inseriti dall'utente
        const nomeCognome = document.getElementById('nome-cognome').value;
        console.log(nomeCognome);

        const trattakm= document.getElementById('percorso').value;
        console.log(trattakm);

        const etaCliente= document.getElementById('etaCliente').value;
        console.log(etaCliente);

        // Dati
        const prezzo = trattakm * 0.21
        console.log(prezzo);
        
        let sconto = 0;
        let scontoApplicato = 0;

        // Calcolo sconto
        if (etaCliente === 'minorenne') {
            sconto = 20;
            console.log(sconto);
        
            scontoApplicato = (prezzo * sconto) / 100;
            console.log(scontoApplicato);
        } else if (etaCliente === 'over65') {
            sconto = 40;
            console.log(sconto);
        
            scontoApplicato = (prezzo * sconto) / 100;
            console.log(scontoApplicato);
        }

        // Calcolo prezzo finale
        const prezzoFinale = prezzo - scontoApplicato;
        console.log(prezzoFinale);

        document.getElementById('price').innerHTML = prezzoFinale.toFixed(2);

        document.getElementById('name').innerHTML = nomeCognome;

});

document.getElementById("clear-btn").addEventListener("click",
    function () {
        const nomeCognome = document.getElementById('nome-cognome');
        console.log(nomeCognome);
        nomeCognome.value = "";

        const trattakm= document.getElementById('percorso');
        console.log(trattakm);
        trattakm.value = "";

        const etaCliente= document.getElementById('etaCliente');
        console.log(etaCliente);
        etaCliente.value = "";
});
