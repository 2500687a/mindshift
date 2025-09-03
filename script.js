// List of motivational quotes
const quotes = [
  "Believe you can and you're halfway there.",
  "Your only limit is your mind.",
  "Push yourself, because no one else is going to do it for you.",
  "Dream it. Wish it. Do it.",
  "Success doesn’t come from comfort zones.",
  "Small steps every day create big results.",
  "Your future is created by what you do today, not tomorrow."
];

// Get elements
const button = document.getElementById("inspireBtn");
const message = document.getElementById("message");

// Event listener for button
button.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  message.textContent = quotes[randomIndex];
});
