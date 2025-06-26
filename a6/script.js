let fruits = [];

function addFruit() {
  const input = document.getElementById("fruitInput");
  const fruitName = input.value.trim();

  if (fruitName) {
    fruits.push(fruitName);
    input.value = "";
    input.focus();
    displayFruits(fruits); // Show all fruits after adding
  }
}

function searchFruit() {
  const input = document.getElementById("fruitInput");
  const searchText = input.value.toLowerCase();

  const filtered = fruits
    .map((fruit, index) => ({ fruit, index }))
    .filter(({ fruit }) => fruit.toLowerCase().includes(searchText));

  displayFruits(filtered);
}

function deleteFruit(indexToDelete) {
  fruits = fruits.filter((_, index) => index !== indexToDelete);
  displayFruits(fruits); // After delete, show full list again
}

function displayFruits(list) {
  const output = document.getElementById("output");

  output.innerHTML = list.map((item, index) => {
    // item can be either string (like "Apple") or object (like { fruit: "Apple", index: 0 })
    const fruitName = typeof item === 'string' ? item : item.fruit;
    const actualIndex = typeof item === 'string' ? index : item.index;

    return `
      <div class="fruit-item">
        ${actualIndex + 1}. ${fruitName}
        <button class="delete-btn" onclick="deleteFruit(${actualIndex})">Delete</button>
      </div>
    `;
  }).join('');
}

