var cardNumber = 8;
var cards = createArray(cardNumber);
var choice1;
var choice2;

console.log(cards);

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
  var ch1Val = ch1.firstElementChild.innerHTML;
  var ch2Val = ch2.firstElementChild.innerHTML;

  console.log(ch1Val);
  console.log(ch2Val);

  if (ch1Val === ch2Val) {
    console.log("Cards Equal!")
    setCardBorder(ch1, ch2, "correct");
    resetChoices();
    //keep cards revealed
    //reset choices
  } else {
    console.log("Cards Not Equal!")
    setCardBorder(ch1, ch2, "incorrect");
    setTimeout(function() {resetCards(ch1, ch2)}, 2000);
    resetChoices();
    //hide cards again
    //reset choices to null
  }
}

function resetChoices() {
  choice1 = "";
  choice2 = "";
}

function resetCards(ch1, ch2) {
  var ch1NumEl = ch1.firstElementChild;
  var ch2NumEl = ch2.firstElementChild;

  setCardBorder(ch1, ch2);
  ch1NumEl.style.visibility = "hidden";
  ch2NumEl.style.visibility = "hidden";
}

function setCardBorder(ch1, ch2, result) {
  if (result == "incorrect") {
    ch1.style.border = ch2.style.border = "2px solid red";
  } else if (result === "correct") {
    ch1.style.border = ch2.style.border = "2px solid green";
  } else {
    ch1.style.border = ch2.style.border = "none"
  }
}

function resetGame() {

}
