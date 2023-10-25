const quote = document.querySelector("a");
const toggle = document.querySelector(".toggleMode");
const background = document.querySelector(".main__outer");

//generate on load
generateQuote();

function generateQuote() {
  quote.classList.contains("text--light")
    ? (quote.style.color = "blue")
    : (quote.style.color = "yellow");
  fetch("https://api.themotivate365.com/stoic-quote")
    .then((res) => res.json())
    .then((data) => {
      quote.style.color = "";
      data = data.quote.toUpperCase();

      //remove @ from quote endings
      if (data[data.length - 1] === "@") {
        data = data.slice(0, data.length - 2);
      }

      quote.innerText = data;
    });
}

quote.addEventListener("click", generateQuote);

toggle.addEventListener("click", () => {
  quote.classList.toggle("text--light");
  background.classList.toggle("main--light");
  toggle.classList.toggle("toggleMode--light");
});
