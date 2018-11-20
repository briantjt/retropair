"use strict";
let people = [
  "Brian",
  "Calvin",
  "Sheldon",
  "Xinfang",
  "Kaixin",
  "Angeline",
  "Yamin",
  "Tim",
  "Huimin",
  "Delphine",
  "Shun",
  "Sebastian"
];

function tableFill(array) {
  let pairs = Math.floor(array.length / 2);
  let tableArray = [[], []];
  let object = {};
  object["Sit Out"] = array.shift();
  //first row
  for (let i = 0; i < pairs; i++) {
    tableArray[0][i] = array.shift();
  }
  //second row
  for (let i = pairs - 1; i >= 0; i--) {
    tableArray[1][i] = array.shift();
  }
  for (let i = 0; i < pairs; i++) {
    object[tableArray[0][i]] = tableArray[1][i];
  }
  return object;
}

export default function createPairs(array) {
  let arrayOfPairs = [];
  let i = array.length;
  let pairs;
  if (array.length % 2 !== 0) {
    while (i--) {
      array.unshift(array.pop());
      arrayOfPairs.push(tableFill([...array]));
    }
  } else {
    let head = array[0];
    let clone = array.slice(1);
    while (--i) {
      clone.unshift(clone.pop());
      pairs = tableFill([...clone])
      pairs[head] = pairs["Sit Out"]
      delete pairs["Sit Out"]
      arrayOfPairs.push(pairs);
    }
  }
  return arrayOfPairs;
}

