const quote = document.querySelector("h1");
const generate = document.querySelector("button");

//generate on load
generateQuote();

function generateQuote() {
  fetch("https://api.themotivate365.com/stoic-quote")
    .then((res) => res.json())
    .then((data) => {
      data = data.quote.toUpperCase();
      quote.innerText = data;
    });
}

generate.addEventListener("click", generateQuote);
