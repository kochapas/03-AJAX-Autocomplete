/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
// TODO: Autocomplete the input with AJAX calls.
const textbox = document.querySelector("#search");
textbox.oninput = (event) => {
  console.log(event);
  fetch(`https://wagon-dictionary.herokuapp.com/autocomplete/${event.srcElement.value}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      const results = document.querySelector("#results");
      results.innerHTML = "";
      data.words.forEach((word) => {
        const element = `
        <li>
          <a href="https://www.allrecipes.com/search/results/?search=${word}" target="_blank">
            ${word}
          </a>
        </li>`;
<<<<<<< HEAD
        results.insertAdjacentHTML("afterbegin", element);
=======
        results.insertAdjacentHTML("beforeend", element);
>>>>>>> 3167d94b7b3fc8b1bd5c32d494e553eae46337d9
      });
    });
};

const searchButton = document.querySelector(".btn-search");
searchButton.addEventListener("click", (event) => {
  console.log(event);
  const word = document.querySelector("#search").value;
  event.target.setAttribute("href", `https://www.allrecipes.com/search/results/?search=${word}`);
});

/******/ })()
;
//# sourceMappingURL=main.js.map