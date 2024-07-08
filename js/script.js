// Funzione per generare numeri casuali unici
function generateUniqueRandomNumbers(count, range) {
  const randomNumbers = new Set();
  while (randomNumbers.size < count) {
    const randomNum = Math.floor(Math.random() * range);
    randomNumbers.add(randomNum);
  }
  return Array.from(randomNumbers);
}

// Funzione che crea il singolo quadratino della griglia
function createSingleSquare(
  num,
  sideNumber,
  bombs,
  maxSafeClicks,
  onSafeClick
) {
  const square = document.createElement("div");
  square.classList.add("square");

  let sideLength = `calc(100% / ${sideNumber})`;
  square.style.width = sideLength;
  square.style.height = sideLength;

  square.innerText = num + 1;

  square.addEventListener("click", function () {
    if (bombs.includes(num)) {
      this.classList.add("clicked-bomb");
      alert("Hai calpestato una bomba! Partita terminata.");
      document.getElementById("grid").innerHTML = ""; // Resetta la griglia
    } else {
      this.classList.add("clicked-sky");
      onSafeClick();
    }
  });

  return square;
}

// Funzione che genera la griglia
function generateGrid(cellsNumber, sideNumber, bombs) {
  const grid = document.getElementById("grid");
  grid.innerHTML = ""; // Resetta la griglia

  let safeClickCount = 0;
  const maxSafeClicks = cellsNumber - bombs.length;

  const onSafeClick = () => {
    safeClickCount++;
    if (safeClickCount === maxSafeClicks) {
      alert("Complimenti! Hai vinto la partita!");
    }
  };

  for (let i = 0; i < cellsNumber; i++) {
    let item = createSingleSquare(
      i,
      sideNumber,
      bombs,
      maxSafeClicks,
      onSafeClick
    );
    grid.append(item);
  }
}

// Funzione che genera una nuova partita
function createNewGame() {
  let difficulty = parseInt(document.getElementById("difficulty").value);

  if (!isNaN(difficulty)) {
    let totalCells;
    let sideCells;

    switch (difficulty) {
      case 1:
        totalCells = 100;
        sideCells = 10;
        break;
      case 2:
        totalCells = 81;
        sideCells = 9;
        break;
      case 3:
        totalCells = 49;
        sideCells = 7;
        break;
      default:
        console.log("Difficoltà non selezionata");
    }

    const bombs = generateUniqueRandomNumbers(16, totalCells);
    console.log("Bombs:", bombs);

    generateGrid(totalCells, sideCells, bombs);
  } else {
    alert("Non hai selezionato la difficoltà");
  }
}

// Recupero il pulsante dal DOM
const button = document.getElementById("play");

// Assegno al pulsante l'evento click
button.addEventListener("click", function () {
  createNewGame();
});
