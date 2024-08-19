const inputElement = document.getElementById("input").value;
const date = document.getElementById("date");
const btn = document.getElementById("btn");

// console.log(input);
// console.log("hello");
btn.addEventListener("click", () => {
  const inputValue = inputElement.value;
  console.log(inputValue);
});
