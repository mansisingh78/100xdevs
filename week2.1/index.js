const date = new Date();
console.log(date.getFullYear());

const map = new Map();
map.set("name", "Alice");
map.set("age", 30);
console.log(map.get("age"));

function logName() {
  console.log("mansi");
}
setTimeout(logName, 3000);
