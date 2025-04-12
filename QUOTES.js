const quotes = [
    "The best way to predict the future is to invent it.",
    "Life is what happens when you're busy making other plans.",
    "Code is like humor. When you have to explain it, it’s bad.",
    "Simplicity is the soul of efficiency.",
    "Stay hungry, stay foolish.",
    "The best way to get started is to quit talking and begin doing. – Walt Disney",
  "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
  "Success is not in what you have, but who you are. – Bo Bennett",
  "Believe you can and you're halfway there. – Theodore Roosevelt",
  "Opportunities don't happen. You create them. – Chris Grosser",
  ];
  
  function showQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = quotes[randomIndex];
  }
  