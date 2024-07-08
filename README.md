L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.Scomponete sempre il problema in sotto problemi, senza andare troppo nel dettaglio questa volta. Andate nel dettaglio solo quando non riusciti ad implementare in codice qualcosa.

1. definisco funzione che mi crea i quadrati della griglia
2. assegno la classe square all'elemento
3. restituisco il quadrato contenuto della variabile currentElement
4. recupero il pulsante dal dom
5. recupero l'elemento che conterrà la mia griglia
6. eseguo un ciclo di 100 iterazioni per creare una griglia 10x10
7. creo il singolo quadrato chiamando la funzione createSquare
8. aggiungo l'evento click al quadrato creato
9. appendo il quadrato appena creato all'interno della griglia presa precedentemente
