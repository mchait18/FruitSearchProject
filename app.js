const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");

const fruit = [
  "Apple",
  "Apricot",
  "Avocado 🥑",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

function search(str) {
  let results = [];
  let newFruit = "";
  let begWord = "";
  let endWord = "";
  let midword = "";
  for (let oneFruit of fruit) {
    const indx = oneFruit.toLowerCase().indexOf(str.toLowerCase());
    if (indx !== -1) {
      indx === 0 ? (begWord = "") : (begWord = oneFruit.slice(0, indx));
      midword = oneFruit.slice(indx, indx + str.length);
      endWord = oneFruit.slice(indx + str.length);
      newFruit = begWord + midword.bold() + endWord;
      results.push(newFruit);
    }
  }
  return results;
}

function searchHandler(e) {
  const suggestionsArr = document.querySelectorAll("li");
  for (let sug of suggestionsArr) {
    sug.remove();
  }
  const results = search(input.value);

  if (input.value !== "") showSuggestions(results, results.length);
}

function showSuggestions(results, inputVal) {
  for (let result of results) {
    let newResult = document.createElement("li");
    newResult.innerHTML = result;
    suggestions.append(newResult);
  }
}

function useSuggestion(e) {
  input.value = e.target.innerText;
  const suggestionsArr = document.querySelectorAll("li");
  for (let sug of suggestionsArr) {
    sug.remove();
  }
}

input.addEventListener("keyup", searchHandler);
suggestions.addEventListener("click", useSuggestion);
