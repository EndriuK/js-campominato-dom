// definizione della funzione che mi crea i quadrati della griglia
function createSquare(value) {
  let currentElement = document.createElement("div");
  // gli metto il numero progressivo
  currentElement.innerText = value + 1;
  // assegnazione della classe square all'elemento
  currentElement.classList.add("square");

  // restituisco il quadrato contenuto della variabile currentElement
  return currentElement;
}
// recupero il pulsante dal dom
const btn = document.getElementById("start");

// recupero l'elemento che conterrà la mia griglia
const grid = document.getElementById("grid");

btn.addEventListener("click", function () {
  // eseguo un cliclo di 100 iterazioni per creare una griglia x10
  for (let i = 0; i < 100; i++) {
    // creo il singolo quadrato chiamando la funzione createSquare
    let currentSquare = createSquare(i);

    // aggiungo l'evento click al quadrato creato
    currentSquare.addEventListener("click", function () {
      //   console.log(this);

      this.classList.add("clicked-sky");
    });

    // console.log(i + 1);
    // appendo il quadrato appena creato all'interno della griglia presa precedentemente
    grid.append(currentSquare);
  }
});
