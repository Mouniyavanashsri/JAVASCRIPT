fruits = ["apple", "watermelon", "grapes"];
console.log("Original Array:");
console.log(fruits);

fruits.push("kiwi");
console.log("Array after push operation:");
console.log(fruits);

fruits.pop();
console.log("Array after pop operation:");
console.log(fruits);

console.log("Accessing the 1st and last Elements:");
console.log(fruits[0]);
let size = fruits.length;
console.log(fruits[size - 1]);

console.log("Array after unshift operation:");
fruits.unshift("cherry");
console.log(fruits);

console.log("Array after shift operation:");
fruits.shift();
console.log(fruits);

console.log("Array after splice operation:");
let removedElement = fruits.splice(1, 1);
console.log(fruits);

fruits.push("orange");
fruits.push("banana");
fruits.push("mango");
console.log("Accessing an array using loop:");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

console.log(fruits);
//Spread operator
let newArray = [...fruits, "A", "B"];
console.log(newArray);
console.log(fruits);
