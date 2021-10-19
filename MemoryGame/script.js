const gameContainer = document.getElementById("game");
const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];
cardsToCheck = []


// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}
function checkCardsForMatch(){
  if(cardsToCheck[0] === cardsToCheck[1]) {
    while (document.querySelector('.selected')){
      document.querySelector('.selected').classList.add('correct');
      document.querySelector('.selected').classList.remove('selected');
      cardsToCheck = []
    }
  }
  else {setTimeout(function(){
    while (document.querySelector('.selected')){
      document.querySelector('.selected').style.backgroundColor = "white"
      document.querySelector('.selected').classList.remove('selected');
    }
    cardsToCheck = []
  }, 2000);
    
  }
  
}


// This function handles a click, makes sure there aren't too many cards selected and that the card being clicked isn't a correct card that was already guessed. It then displays the card color and checks for the number of cards being "guessed." If two cards are being shown then it evaluates them for a match and leaves them with their colors displayed if they are, and removes the colors if not"
function handleCardClick(e) {
  const selectedCard = e.target
  if (cardsToCheck.length > 1 || selectedCard.classList.contains('correct') || selectedCard.classList.contains('selected')){
  } 
  else{selectedCard.style.backgroundColor = e.target.classList[0];
    cardsToCheck.push(e.target.classList[0])
    selectedCard.classList.add("selected");
    if (cardsToCheck.length === 2) {
      checkCardsForMatch()
    }
  }  
}


// when the DOM loads
createDivsForColors(shuffledColors);
