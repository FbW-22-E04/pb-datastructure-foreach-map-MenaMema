function doubleValues(arr) {
  const value1 = arr.map((item) => item * 2);

  return value1;
}

function doubleValues2(arr) {
  const value2 = arr.map((item) => item * 2);

  return value2;
}

console.log(doubleValues([1, 2, 3]));
console.log(doubleValues2([5, 1, 2, 3, 10]));

console.log("----------------------------------------");

function onlyEvenValues(arr) {
  const evenValue = [];
  arr.forEach((item) => {
    if (item % 2 === 0) {
      evenValue.push(item);
    }
  });
  console.log(evenValue);
}

onlyEvenValues([1, 2, 3]);
onlyEvenValues([5, 1, 2, 3, 10]);

console.log("----------------------------------------");

function showFirstAndLast(arr) {
  const test = arr.map((item) => {
    return item[0] + item.slice(-1);
  });
  console.log(test);
}

showFirstAndLast(["colt", "matt", "tim", "udemy"]);
showFirstAndLast(["hi", "goodbye", "smile"]);

console.log("----------------------------------------");

function addKeyAndValue(arr, key, value) {
  const q4 = arr.map((item) => {
    item[key] = value;
    return item;
  });
  console.log(q4);
}

addKeyAndValue(
  [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }, { name: "Colt" }],
  "title",
  "instructor"
);

console.log("----------------------------------------");
