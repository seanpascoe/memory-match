var cards = [1, 1, 2, 2, 3, 3, 4, 4];
var choice1;
var choice2;

function cardSelect(e) {
  var numEl = e.firstElementChild
  var cardValue = numEl.innerHTML;
  populateChoice(cardValue);

  numEl.style.visibility = "visible";
}

function populateChoice(card) {

  if (!choice1) {
    choice1 = card;
  } else {
    choice2 = card;
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
