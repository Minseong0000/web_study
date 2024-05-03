
var usedNums = new Array();

function newCard() {
  for (var i = 0; i < 9; i++) {
    setSquare(i);
  }
}

function setSquare(squareNumber) {  
  var currSquare = "square" + squareNumber;
  var newNum;

  do {
    newNum = getNewNum() + 1;
  }
  while (usedNums[newNum]);

  usedNums[newNum] = true;
  document.getElementById(currSquare).innerHTML = newNum;
}
console.log(usedNums);



function getNewNum() {
  return Math.floor(Math.random() * 9);
}

function anotherCard() {
  for (var i = 1; i < usedNums.length; i++) {
    usedNums[i] = false;
  }

  newCard();
}

function randomNumber() {
  return console.log(Math.ceil(Math.random()*9));
}
