let array = [6, 2, 8, 3, -4, 2, 7];

// keep track of how many times it took
let counter = 0;


//console.log(shuffle(array));


shuffle(array);
console.log(array);
shuffle(array);
console.log(array);
shuffle(array);

console.log(array);






function shuffle(array) {
  var currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}