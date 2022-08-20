document.getElementById("button").addEventListener("click", function () {
  //event.preventDefault();
  if (randomCoinFlip()) {
    document.getElementById("coin").innerHTML = "tails";
  } else {
    document.getElementById("coin").innerHTML = "heads";
  }
});

function randomCoinFlip() {
  return Math.random() > 0.5;
}
