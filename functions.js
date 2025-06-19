function hello() {
  console.log("Hello");
}
hello();
function add(a, b) {
  console.log(a + b);
}
add(1, 2);

function displayAnotherFunction(func) {
  func(1, 2);
}

displayAnotherFunction(add);

let varFunc = add;
varFunc(1, 4);

//Anonymous Function inside a variable
let newFuncVar = function () {
  console.log("Variable Function");
};
newFuncVar();

const arrowFuncVar = () => {
  console.log("Arrow Functions");
};

arrowFuncVar();
