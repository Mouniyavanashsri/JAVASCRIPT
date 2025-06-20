// 5c. Calculate the cost of food
const coffeePrice = 5;
const bagelPrice = 3;
const soupPrice = 9;

const cost = (1 * coffeePrice) + (2 * bagelPrice) + (1 * soupPrice);

// 5d. Display cost
console.log(`Cost of food: $${cost}`);

// 5e. Calculate 10% tax
const tax = cost * 0.1;

// 5f. Display tax
console.log(`Tax (10%): $${tax.toFixed(2)}`);

// 5g. Calculate and display total cost
const totalCost = cost + tax;
console.log(`Total cost: $${totalCost.toFixed(2)}`);
