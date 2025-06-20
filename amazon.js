// Product prices in cents
const basketballPrice = 2095; // $20.95
const tshirtPrice = 799; // $7.99
const toasterPrice = 1899; // $18.99

// Shipping cost in cents
const shippingCost = 499; // $4.99

// 2f. Calculate the cost of the products (before shipping and taxes)
const productsTotal = basketballPrice + tshirtPrice + toasterPrice;
console.log("Products Total (before shipping and tax): $" + (productsTotal / 100).toFixed(2));

// 2g. Calculate the total before tax (including shipping)
const totalBeforeTax = productsTotal + shippingCost;
console.log("Total before tax: $" + (totalBeforeTax / 100).toFixed(2));

// 2h. Calculate the 10% tax using Math.round
const taxAmount = Math.round(totalBeforeTax * 0.10);
console.log("Tax (10%): $" + (taxAmount / 100).toFixed(2));

// 2i. Calculate final order total
const orderTotal = totalBeforeTax + taxAmount;  
console.log("Order Total: $" + (orderTotal / 100).toFixed(2));
