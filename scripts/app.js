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

