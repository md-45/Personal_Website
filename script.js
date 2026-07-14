/* .js files add interaction to your website */
const quotes = [
  "\"Knowledge speaks, but wisdom listens.\" - Jimi Hendrix",
  "“If you don’t risk anything, you risk even more.” – Erica Jong",
  "“The worst enemy to creativity is self-doubt.” - Sylvia Path"
];

const scrollTextElement = document.getElementById("scroll-text");
let currentQuoteIndex = 0;

function displayNextQuote() {
  scrollTextElement.textContent = quotes[currentQuoteIndex];
  currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
}
setInterval(displayNextQuote, 30000);
