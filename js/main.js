var cards = createArray(8);
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
  var numEl = clickElem.firstElementChild
  var cardValue = numEl.innerHTML;
  populateChoice(cardValue);
  numEl.style.visibility = "visible";
}

function populateChoice(cardVal) {

  if (!choice1) {
    choice1 = cardVal;
  } else {
    choice2 = cardVal;
    cardCompare(choice1, choice2);
  }
  console.log(choice1);
  console.log(choice2);
}

function cardCompare(ch1, ch2) {
  if (ch1 === ch2) {
    console.log("Cards Equal!")
    resetChoices();
    //keep cards revealed
    //reset choices
  } else {
    console.log("Cards Not Equal!")
    resetChoices();
    //hide cards again
    //reset choices to null
  }
}

function resetChoices() {
  choice1 = "";
  choice2 = "";
}
