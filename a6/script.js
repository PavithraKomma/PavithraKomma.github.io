const fruits = [];

function addFruit() {
  const input = document.getElementById("fruitInput");
  const fruitName = input.value.trim();

  if (fruitName) {
    fruits.push(fruitName);
    input.value = "";
    displayFruits();
  }
}

function displayFruits() {
  const output = document.getElementById("output");

  output.innerHTML = fruits.map((fruit, index) => 
    `<p>${index + 1}. ${fruit}</p>`
  ).join('');
}
