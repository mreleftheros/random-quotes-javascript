const generateBtn = document.getElementById("generateBtn");
const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");

// function that updates UI with given quote and author data
const updateUI = (quote, author) => {
  quoteElement.innerHTML = quote;
  authorElement.innerHTML = author;
};

// asynchronous function that returns quote data from api
const getRandomQuote = async () => {
  try {
    const response = await fetch("https://goquotes-api.herokuapp.com/api/v1/random?count=1");
    if(!response.ok) {
      throw new Error("Could not fetch the data.");
    }
    const data = await response.json();

    return data;
  }
  catch(err) {
    console.log("ERROR", err);
  }
};

// events
generateBtn.addEventListener("click", getRandomQuote);