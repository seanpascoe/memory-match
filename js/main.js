var cardNumber = 8;
var cards = createArray(cardNumber);
var shuffledCards = shuffleCards(cards);
console.log(shuffledCards);
var choice1;
var choice2;
var guessCounter = 0;


function createArray(arrLength) {
  var array1 = createSubArray(arrLength/2);
  var array2 = createSubArray(arrLength/2);

  function createSubArray(num) {
    var arr = [];
    for(var i = 1; i <= num; i++) {
      arr.push(i);
    }
    return arr;
  }

  var bigArray = array1.concat(array2);

  return bigArray;
}

function cardSelect(clickElem) {
  var numEl = clickElem.firstElementChild;

  //checks to see if card value is currently visable
  if(numEl.style.visibility !== "visible") {
    numEl.style.visibility = "visible";
    if (!choice1) {
      choice1 = clickElem;
    } else {
      choice2 = clickElem;
      cardCompare(choice1, choice2);
    }
  }
}

function cardCompare(ch1, ch2) {
  guessCounter++
  var ch1Val = ch1.firstElementChild.innerHTML;
  var ch2Val = ch2.firstElementChild.innerHTML;

  console.log(ch1Val);
  console.log(ch2Val);

  if (ch1Val === ch2Val) {
    console.log("Cards Equal!")
    setCardBorder(ch1, ch2, "correct");
    resetChoices();
    winCheck();
  } else {
    console.log("Cards Not Equal!")
    setCardBorder(ch1, ch2, "incorrect");
    setTimeout(function() {resetCards(ch1, ch2)}, 2000);
    resetChoices();
  }
}

function resetChoices() {
  choice1 = choice2 = "";
}

//loops through arguments and sets border to none and card value element to hidden
function resetCards() {
  for (var i = 0; i < arguments.length; i++) {
    var NumEl = arguments[i].firstElementChild;
    setCardBorder(arguments[i]);
    NumEl.style.visibility = "hidden";
  }
}

function setCardBorder(ch1, ch2, result) {
  if (result === "incorrect") {
    ch1.style.border = ch2.style.border = "2px solid red";
  } else if (result === "correct") {
    ch1.style.border = ch2.style.border = "2px solid green";
  //check to see if there is no value for ch2, if so, changes only ch1 border to avoid error
  } else if (ch2 == null) {
    ch1.style.border = "none";
  } else {
    ch1.style.border = ch2.style.border = "none";
  }
}

function resetGame() {
  var card;
  for (var i = 1; i <= cardNumber; i++) {
    card = document.getElementById('card' + [i]);
    resetCards(card);
  }
}

function winCheck() {
  var card;
  for (var i = 1; i <= cardNumber; i++) {
    card = document.getElementById('card' + [i]);
    if (card.style.border !== "2px solid green") {
      return
    }
  }
  console.log('YOU WIN!!!!!!! It took you ' + guessCounter + " guesses");
}


//takes an array of numbers (any length), shuffles the values, and returns a shuffled array
function shuffleCards(cardArray) {
  var count = cardArray.length;
  var cardsShuffled = [];

  while (cardArray.length > 0) {
    var randomCardIndex = Math.floor((Math.random() * cardArray.length))
    cardsShuffled.push(cardArray.splice(randomCardIndex, 1)[0])
  }
  return cardsShuffled;
}
