console.log(1);
console.log(2);
// doSomething();
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));
// setTimeout(doSomething, 4000);
setTimeout(() => {
  console.log("lazy logged");
}, 4000);
console.log(4);
console.log(5);
console.log(6);

function doSomething() {
  console.log(3);
}
