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
          <a href="https://www.allrecipes.com/search?q=${word}" target="_blank">
            ${word}
          </a>
        </li>`;
        results.insertAdjacentHTML("beforeend", element);
      });
    });
};

const searchButton = document.querySelector(".btn-search");
searchButton.addEventListener("click", (event) => {
  console.log(event);
  const word = document.querySelector("#search").value;
  event.target.setAttribute("href", `https://www.allrecipes.com/search?q=${word}`);
});
